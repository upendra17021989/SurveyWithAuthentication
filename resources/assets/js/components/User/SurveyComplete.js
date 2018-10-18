import React, { Component } from 'react';
import Nav from '../navbar';

class SurveyComplete extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="survey-complete">
      <Nav link="Logout" />
      <h1 className="message">
          Thanks for Participating in the Survey!!!
	    </h1>
      </div>
    )
  }
}

export default SurveyComplete;
