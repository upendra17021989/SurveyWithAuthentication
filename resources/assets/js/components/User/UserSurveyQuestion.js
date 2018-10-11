import React, { Component } from 'react';
import UserSurveyOption from './UserSurveyOption';
import {InputTextarea} from 'primereact/inputtextarea';

class UserSurveyQuestion extends Component {
  constructor(props){
    super(props);
    this.state = {
      answer_id: ''
    };
  }

  onButtonCheck(e, question_id) {
    this.setState({answer_id: e.target.value});
    this.props.onButtonCheck(e.target.value, question_id);
  }

  render() {
    if (this.props.obj.question_type == 'MCQ') {
      return (
        <div className="surveyQuestion">
            {this.props.currentCount}.) {this.props.obj.question_description}
            <UserSurveyOption obj={this.props.obj} onButtonCheck={this.props.onButtonCheck}/>
  	    </div>
      )
    } else if (this.props.obj.question_type = 'OE') {
      return (
        <div className="surveyQuestion">
            {this.props.currentCount}.) {this.props.obj.question_description}
            <InputTextarea rows={10} cols={50} value={this.state.answer_id} onChange={(e) => this.onButtonCheck(e, this.props.obj.question_id)} />
        </div>
      )
    }
  }
}

export default UserSurveyQuestion;
