import React, { Component } from 'react';
import UserSurveyOption from './UserSurveyOption';
import {InputTextarea} from 'primereact/inputtextarea';
import {BrowserView, MobileView} from "react-device-detect";

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
        <div className="survey-question">
            {this.props.currentCount}.) {this.props.obj.question_description}
            <UserSurveyOption obj={this.props.obj.optionDetails} onButtonCheck={this.props.onButtonCheck}/>
  	    </div>
      )
    } else if (this.props.obj.question_type = 'OE') {
      return (
        <div className="survey-question">
          <span className="open-ended"> 
            {this.props.currentCount}.) {this.props.obj.question_description}
          </span>
          <BrowserView>
            <InputTextarea className="text-area" rows={7} cols={110} autoResize={true} value={this.state.answer_id} onChange={(e) => this.onButtonCheck(e, this.props.obj.question_id)} />
          </BrowserView>
          <MobileView>
            <InputTextarea className="text-area" rows={5} cols={34} autoResize={true} value={this.state.answer_id} onChange={(e) => this.onButtonCheck(e, this.props.obj.question_id)} />
          </MobileView>
        </div>
      )
    }
  }
}

export default UserSurveyQuestion;
