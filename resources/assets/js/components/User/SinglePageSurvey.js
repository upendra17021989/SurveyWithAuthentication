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
                  value: '',
                  surveys: '',
                  counter: 0,
                  isCompleted: false
                };
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
      console.log('state:', this.state);
      alert('hi')
    }
     
     tabRow() {
        let self = this;
        if (this.state.surveys instanceof Array) {
          return this.state.surveys.map(function(object, i){
              return <UserSurveyQuestion currentCount={i+1} obj={object} />;
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