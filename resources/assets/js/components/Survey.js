import React, { Component } from 'react';

class SurveyOptions extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
      <div className="surveyQuestions">
        {this.props.obj.question}
      </div>
       <li className="surveyOptions">
          {if (this.props.obj.option) { }
          <input
            type="radio"
            className="radioCustomButton"
            name="radioGroup"
          />
          <label className="radioCustomLabel">
            {this.props.obj.option}
          </label>
        </li>
        }
      </div>
    )
  }
}

export default SurveyOptions;
