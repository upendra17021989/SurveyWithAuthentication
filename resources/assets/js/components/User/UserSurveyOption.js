import React, { Component } from 'react';
import axios from 'axios';
import {RadioButton} from 'primereact/radiobutton';

class UserSurveyOption extends Component {
  constructor(props){
    super(props);
    this.state = {
      options: props.obj,
      answer_id: ''
    };
  }

  onButtonCheck(e,question_id, description) {
    this.setState({answer_id: e.value});
    this.props.onButtonCheck(e.value, question_id, description);
  }

  tabRow() {
    let self = this;
    if (this.state.options instanceof Array) {
        return this.state.options.map(function(item, key){
          return (
            <li className="survey-option">
            <RadioButton inputId={"rb" + item.option_id} value={item.option_id} name={"surveyOptions"+ item.question_id} onChange={(e) => self.onButtonCheck(e, item.question_id, item.option_description)} checked={self.state.answer_id === item.option_id} />
            <label htmlFor={"rb" + item.option_id} className="p-radiobutton-label">{item.option_description}</label>
          </li>
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
