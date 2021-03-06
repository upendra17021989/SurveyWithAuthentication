import React, { Component } from 'react';
import {Button} from 'primereact/button';
import Nav from '../navbar';
import axios from 'axios';

class UserSurveyHome extends Component {
  constructor(props){
    super(props);
     this.state = {
              user_id: props.location.state && props.location.state.user_id,
              company_id: props.location.state && props.location.state.company_id
                };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    axios.get('/api/getsurveystatus/'+this.state.user_id)
      .then(response => {
          if (response.data.length > 0) {
              this.setState({err: false});
              if (response.data[0].status == 'submitted') {
                  this.props.history.push({
                    pathname: '/already-complete',
                    state: {
                            user_id: this.state.user_id,
                            company_id: this.state.company_id 
                          }
                  });
              } else {
                  this.props.history.push({
                    pathname: '/single-page-survey',
                    state: {
                            user_id: this.state.user_id,
                            company_id: this.state.company_id 
                          }
                  });
              }
          }
      }).catch(error=> {
          this.setState({err: true})
      });
  }

  render() {
    return (
      <div className="user-survey-home">
        <Nav link="Logout" />
        <h1 className='title'> Welcome to the Survey!</h1>
        <div className="content"> Please answer the following questions to the best of your ability.
          Press the button below to begin the survey.
        </div>
          <Button className="p-button-raised p-button-rounded start-button" label="Start Survey" onClick={this.handleClick} />
      </div>
    )
  }
}

export default UserSurveyHome;
