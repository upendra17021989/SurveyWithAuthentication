import React, { Component } from 'react';
import axios from 'axios';
import {RadioButton} from 'primereact/radiobutton';

class UserSurveyOption extends Component {
  constructor(props){
    super(props);
    this.state = {
                options: '',
                form_id: props.obj.form_id,
                question_id: props.obj.question_id,
                answer_id: ''
               };
  }

  componentDidMount(){
      this.getOptions(this.state.form_id, this.state.question_id);
  }

  getOptions($form_id, $question_id) {
    axios.get('/api/adminoption/'+ $form_id + '/' + $question_id)
     .then(response => {
      if (response.data.length > 0) {
       this.setState({ options: response.data});
      }

     })
     .catch(function (error) {
       console.log(error);
     })
  }

  onButtonCheck(e,question_id) {
    this.setState({answer_id: e.value});
    this.props.onButtonCheck(e.value, question_id);
  }

  tabRow() {
    let self = this;
    if (this.state.options instanceof Array) {
        return this.state.options.map(function(item, key){
          return (
            <div className="survey-option">
            <RadioButton value={item.option_id} name={"surveyOptions"+ item.question_id} onChange={(e) => self.onButtonCheck(e, item.question_id)} checked={self.state.answer_id === item.option_id} />
          <label htmlFor="rb1" className="p-radiobutton-label">{item.option_description}</label>
          </div>
          )
        })
      }
  }


 render() {
    return (
      <ul>
        {this.tabRow()}
      </ul>
    )
  }
}

export default UserSurveyOption;
