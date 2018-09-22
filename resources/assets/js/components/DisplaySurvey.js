import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import axios from 'axios';
import { Link } from 'react-router';
import MyGlobleSetting from './MyGlobleSetting';
import SurveyOptions from './SurveyOptions';
import SurveyQuestion from './SurveyQuestion';
import SurveyEnd from './SurveyEnd';
import Nav from './navbar'

class DisplaySurvey extends Component {
  constructor(props) {
    super(props);
    this.state = {
                  value: '',
                  surveys: '',
                  counter: 0,
                  isCompleted: false
                };

    this.handleChange = this.handleChange.bind(this);
  }


    componentDidMount(){
      this.apiCall(this.state.counter + 1);
       
     }

    apiCall($id) {
      axios.get(MyGlobleSetting.url + '/api/survey/'+$id)
       .then(response => {
        if (response.data.length > 0) {
         this.setState({ surveys: response.data,counter: $id });
        } else {
          this.setState({ isCompleted: true})
        }

       })
       .catch(function (error) {
         console.log(error);
       })
       
    }

    handleChange(e){
      this.apiCall(this.state.counter + 1);
    }
     
     tabRow() {
      let self = this;
      if (this.state.isCompleted) {
        return <SurveyEnd/>;
      } else if (this.state.surveys instanceof Array) {
          return this.state.surveys.map(function(object, i){
            if (i == 0) {
              return <SurveyQuestion obj={object} />;
            }
            return <SurveyOptions obj={object} handleChange = {self.handleChange}/>;
          })
        }
       }


  render() {
    return (
      <div>
        <Nav link="Logout" />
        <ReactCSSTransitionGroup
          className="container"
          component="div"
          transitionName="fade"
          transitionEnterTimeout={800}
          transitionLeaveTimeout={500}
          transitionAppear
          transitionAppearTimeout={500}
        >
          {this.tabRow()}
        </ReactCSSTransitionGroup>
      </div>
  )}
}
export default DisplaySurvey;