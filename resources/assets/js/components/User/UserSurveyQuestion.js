import React, { Component } from 'react';
import UserSurveyOption from './UserSurveyOption';

class UserSurveyQuestion extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="surveyQuestion">
          {this.props.currentCount}.) {this.props.obj.question_description}
          <UserSurveyOption obj={this.props.obj} />
	    </div>
    )
  }
}

export default UserSurveyQuestion;
