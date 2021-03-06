import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import MyGlobleSetting from '../MyGlobleSetting';
import Nav from '../navbar'
import UserSurveyQuestion from './UserSurveyQuestion';
import {Growl} from 'primereact/growl';

class SinglePageSurvey extends Component {
  constructor(props) {
    super(props);
    this.state = {
                  user_id: props.location.state.user_id,
                  company_id: props.location.state.company_id,
                  surveys: '',
                  counter: 0,
                  isCompleted: false,
                  answerSet: [],
                  form_id: '',
                  survey_id: ''
                };
      this.onButtonCheck = this.onButtonCheck.bind(this);
      this.showError = this.showError.bind(this);
      this.clear = this.clear.bind(this);
  }


    componentDidMount(){
      this.clear();
      this.getFormId(this.state.company_id);
    }

    getFormId($company_id) {
      axios.get(MyGlobleSetting.url + '/api/getformid/' + $company_id)
       .then(response => {
        if (response.data.length > 0) {
            this.apiCall(response.data[0].form_id);
            this.setState({survey_name: response.data[0].survey_name,
                           form_id: response.data[0].form_id,
                            survey_id: response.data[0].survey_id});
        }

       })
       .catch(function (error) {
         console.log(error);
       })
       
    }

    apiCall($form_id) {
      axios.get(MyGlobleSetting.url + '/api/adminquestion/' + $form_id)
       .then(response => {
        if (response.data.length > 0) {
         this.setState({ surveys: response.data});
        } else {
          this.setState({ isCompleted: true})
        }

       })
       .catch(function (error) {
         console.log(error);
       })
       
    }

    showError() {
        this.growl.show({sticky: true, severity: 'error', summary: 'Please select options for all the questions', detail: 'Validation failed'});
    }

     clear() {
        this.growl.clear();
    }


    onSubmit(e){
      e.preventDefault();
      let self = this;
      if (this.state.surveys.length != this.state.answerSet.length) {
        this.showError();
        return;
      }
      this.state.surveys.map(function(object, i){
        let question_id = object.question_id,
            answer_id = 0,
            answer_description = '';

        
        for (var j=0; j< self.state.answerSet.length; j++) {
          if (self.state.answerSet[j].question_id == question_id) {
            answer_id = self.state.answerSet[j].answer_id;
            answer_description = self.state.answerSet[j].answer_description;
            break;
          }
        }
        object.answer_id = answer_id;
        object.answer_description =answer_description;
      })

        const {user_id, form_id, survey_id, surveys, survey_name} = self.state;
        axios.post('/api/addusersurveydata', {
            user_id,
            survey_id,
            survey_name,
            form_id,
            surveys
          })
          .then(response=> {
            self.setState({err: false});
            self.props.history.push({
                pathname: '/survey-complete',
                state: {
                        user_id: this.props.location.state.user_id,
                        company_id: this.props.location.state.company_id 
                      }
            });
          })
          .catch(error=> {
            self.setState({err: true});
          });
        
    }

    onButtonCheck(selected_option_id, question_id, description) {
      var flag = false;
      for (var j=0; j< this.state.answerSet.length ; j++) {
        if (this.state.answerSet[j].question_id == question_id) {
          this.state.answerSet[j].answer_id = selected_option_id;
          this.state.answerSet[j].answer_description = description;
          flag = true;
          break;
        }
      }

      if (!flag) {
        let item = {}
        item["question_id"] = question_id;
        item["answer_id"] = selected_option_id;
        item["answer_description"] = description;
        this.state.answerSet.push(item);
      }
    }

     
     tabRow() {
        let self = this;
        if (this.state.surveys instanceof Array) {
          return this.state.surveys.map(function(object, i){
              return <UserSurveyQuestion onButtonCheck={self.onButtonCheck} currentCount={i+1} obj={object} />;
          })
        }
       }


  render() {
    return (
      <div className="single-page-survey">
        <Nav link="Logout" />
        <Growl ref={(el) => this.growl = el} />
          <form className="form-horizontal" role="form" method="POST" onSubmit= {this.onSubmit.bind(this)}>
            <h1 className="title">{this.state.survey_name}</h1>
            {this.tabRow()}
            <div className="complete-button">
              <button type="submit" className="btn btn-primary">
                  Complete Survey
              </button>
            </div>
          </form>
      </div>
  )}
}
export default SinglePageSurvey;