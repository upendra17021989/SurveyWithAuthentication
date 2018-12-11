import React, { Component } from 'react';
import Nav from '../navbar';

class AlreadyComplete extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="survey-complete">
      <Nav link="Logout" />
      <h1 className="message">
          You Have Already Submitted this Survey.
          Thank You!!!
	    </h1>
      </div>
    )
  }
}

export default AlreadyComplete;
