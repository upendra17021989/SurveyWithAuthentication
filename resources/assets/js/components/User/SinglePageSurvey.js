import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import MyGlobleSetting from '../MyGlobleSetting';
import Nav from '../navbar'
import UserSurveyQuestion from './UserSurveyQuestion';

class SinglePageSurvey extends Component {
  constructor(props) {
    super(props);
    this.state = {
                  user_id: props.location.state.user_id,
                  surveys: '',
                  counter: 0,
                  isCompleted: false,
                  answerSet: [],
                  form_id: 4,
                  survey_id: 2
                };
      this.onButtonCheck = this.onButtonCheck.bind(this);
  }


    componentDidMount(){
      this.apiCall(4);
       
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

    onSubmit(e){
      e.preventDefault();
      let self = this;
      this.state.surveys.map(function(object, i){
        let question_id = object.question_id;
        let answer_id = 0;
        
        for (var j=0; j< self.state.answerSet.length ; j++) {
          if (self.state.answerSet[j].question_id == question_id) {
            answer_id = self.state.answerSet[j].answer_id;
            break;
          }
        }

        const {user_id, form_id, survey_id} = self.state;
        axios.post('/api/addusersurveydata', {
            user_id,
            survey_id,
            form_id,
            question_id,
            answer_id
          })
          .then(response=> {
            self.setState({err: false});
            self.props.history.push("survey-complete") ;
          })
          .catch(error=> {
            self.setState({err: true});
          });
        })
    }

    onButtonCheck(selected_option_id, question_id) {
      let item = {}
      item["question_id"] = question_id;
      item["answer_id"] = selected_option_id;
      this.state.answerSet.push(item);
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
      <div>
        <Nav link="Logout" />
          <form className="form-horizontal" role="form" method="POST" onSubmit= {this.onSubmit.bind(this)}>
            {this.state.surveys && this.state.surveys[0].form_id}
            {this.tabRow()}
            <button type="submit" className="btn btn-primary">
                                                    Complete Survey
                                                </button>
          </form>
      </div>
  )}
}
export default SinglePageSurvey;