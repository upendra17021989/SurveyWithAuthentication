import React, { Component } from 'react';

class SurveyOptions extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="surveyQuestion">
          {this.props.obj.question}
	</div>
    )
  }
}

export default SurveyOptions;
