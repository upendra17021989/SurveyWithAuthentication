import React, { Component } from 'react';
import Nav from '../navbar';

class SurveyComplete extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
      <Nav link="Logout" />
      <div className="surveyComplete">
          Thanks for Participating in the Survey!!!
	    </div>
      </div>
    )
  }
}

export default SurveyComplete;
