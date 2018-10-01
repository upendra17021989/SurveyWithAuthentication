import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import axios from 'axios';
import MyGlobleSetting from '../MyGlobleSetting';
import Nav from '../navbar';
import { Link } from 'react-router-dom';
import CompanyRow from './CompanyRow';

class DisplayCompany extends Component {
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
      axios.get(MyGlobleSetting.url + '/api/company')
       .then(response => {
        if (response.data.length > 0) {
         this.setState({ companies: response.data });
        }

       })
       .catch(function (error) {
         console.log(error);
       })
       
    }

    tabRow() {
      let self = this;
      if (this.state.companies instanceof Array) {
          return this.state.companies.map(function(item, key){
            return <CompanyRow obj={item} handleSubmit={self.handleSubmit} />;
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
                <div className="panel-heading">Company List</div>
                <div className="panel-body">   
                <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                  {error != undefined && <div className={name} role="alert">{msg}</div>}
                </div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Company Name</th>
                        <th>Address</th>
                        <th>Created Date</th>
                        <th>Updated Date</th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.tabRow()}
                   </tbody>
                  </table>
                  <Link to="/create-company">Create Company</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default DisplayCompany;