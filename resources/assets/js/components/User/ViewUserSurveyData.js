import React, { Component } from 'react';
import Nav from '../navbar';
import axios from 'axios';
import MyGlobleSetting from '../MyGlobleSetting';

class ViewUserSurveyData extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: props && props.location && props.location.state && props.location.state.email,
      submissionDetails: []
    }
  }

  componentDidMount(){
    this.getUsersDetails(this.state.email);
  }

  getUsersDetails($email) {
    axios.get(MyGlobleSetting.url + '/api/getusersurveydata/'+ $email)
     .then(response => {
      if (response.data.length > 0) {
        console.log('check', response.data);
       this.setState({submissionDetails: response.data});
      } else {
        this.setState({submissionDetails: []})
      }

     })
     .catch(function (error) {
       console.log(error);
     })
  }

  tabRow() {
    let self = this;
    if (this.state.submissionDetails instanceof Array) {
        return this.state.submissionDetails.map(function(item, key){
          return (
            <tr key ={key}>
              <td> {item.question_description} </td>
              <td> {item.answer_description} </td>
            </tr>
          )
        })
      }
  }

  render() {
     return (
      <table>
        <thead>
          <tr>
            <th> Question </th>
            <th> Answer </th>
          </tr>
        </thead>
        <tbody>
          {this.tabRow()}
        </tbody>
      </table>
    )
  }
}

export default ViewUserSurveyData;
