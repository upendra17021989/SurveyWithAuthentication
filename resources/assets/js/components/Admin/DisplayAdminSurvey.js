import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import axios from 'axios';
import MyGlobleSetting from '../MyGlobleSetting';
import Nav from '../navbar';
import { Link } from 'react-router-dom';
import AdminSurveyRow from './AdminSurveyRow';

class DisplayAdminSurvey extends Component {
  constructor(props) {
    super(props);
    this.state = {
                  isCompleted: false
                };

    this.handleSubmit = this.handleSubmit.bind(this);

  }


    componentDidMount(){
      this.apiCall();
       
     }

    apiCall() {
      axios.get(MyGlobleSetting.url + '/api/adminsurvey')
       .then(response => {
        if (response.data.length > 0) {
         this.setState({ surveys: response.data });
        }

       })
       .catch(function (error) {
         console.log(error);
       })
       
    }

    tabRow() {
      let self = this;
      if (this.state.surveys instanceof Array) {
          return this.state.surveys.map(function(item, key){
            return <AdminSurveyRow obj={item} handleSubmit={self.handleSubmit} />;
          })
        }
    }

    handleSubmit() {
      this.apiCall();
      this.setState({err: false});
    }

     
  render() {
      let error = this.state.err ;
      let msg = (!error) ? 'Delete Successfully' : 'Oops! , Something went wrong.' ;
      let name = (!error) ? 'alert alert-success' : 'alert alert-danger' ;
    return (
      <div>
        <Nav link="admin" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="panel panel-default">
                <div className="panel-heading">Form List</div>
                <div className="panel-body">   
                <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                  {error != undefined && <div className={name} role="alert">{msg}</div>}
                </div>
                <div className="form-group table-responsive" style={{width: '100%'}}>
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Survey Name</th>
                          <th>Company Name</th>
                          <th>Form Name</th>
                          <th>Start Date</th>
                          <th>End Date</th>
                          <th></th>
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.tabRow()}
                     </tbody>
                    </table>
                  </div>
                  <Link to="/create-admin-survey">Create New Survey</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default DisplayAdminSurvey;