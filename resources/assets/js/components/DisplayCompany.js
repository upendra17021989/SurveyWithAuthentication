import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import axios from 'axios';
import MyGlobleSetting from './MyGlobleSetting';
import Nav from './navbar';
import { Link } from 'react-router-dom'

class DisplayCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
                  isCompleted: false
                };

  }


    componentDidMount(){
      this.apiCall();
       
     }

    apiCall() {
      axios.get(MyGlobleSetting.url + '/api/company')
       .then(response => {
       console.log('response', response);
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
        <Nav link="admin" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="panel panel-default">
                <div className="panel-heading">Company List</div>
                <div className="panel-body">   
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
                    {this.state.companies && this.state.companies.map(function(item, key) {
                         return (
                            <tr key = {key}>
                              <td>{item.company_name}</td>
                              <td>{item.address}</td>
                              <td>{item.created_at}</td>
                              <td>{item.updated_at}</td>
                              <td><Link to={"edit-company/"+item.company_id} className="btn btn-primary">Edit</Link></td>
                              <td><form onSubmit={this.handleSubmit}>
                                    <input type="submit" value="Delete" className="btn btn-danger"/>
                                    <input type="hidden" value={item.company_id} id="companyid"/>
                                  </form>
                              </td>
                            </tr>
                          )
                       },this)}
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