import React, { Component } from 'react';

class SurveyOptions extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }

  render() {
    return (
      <li className="surveyOptions">
        <input
          type="radio"
          className="radioCustomButton"
          name="radioGroup"
          onChange={this.props.handleChange}
          checked= {false}
          value={this.props.obj.option_id}
          id={this.props.obj.option_id}
        />
        <label className="radioCustomLabel">
          {this.props.obj.option}
        </label>
      </li>
    )
  }
}

export default SurveyOptions;
