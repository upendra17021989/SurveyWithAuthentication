import React, { Component } from 'react';

class CompanyRow extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="company">
          {this.props.obj.question}
	</div>
    )
  }
}

export default CompanyRow;
