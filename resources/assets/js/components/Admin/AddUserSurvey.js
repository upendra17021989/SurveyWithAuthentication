import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../navbar';
import axios from 'axios';
import MyGlobleSetting from '../MyGlobleSetting';
import {Dropdown} from 'primereact/dropdown';
import {Calendar} from 'primereact/calendar';
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

class AddUserSurvey extends Component {

    constructor(props){
        super(props);
        this.state = {
          company_id: props && props.match && props.match.params && props.match.params.cid,
          survey_id: props.match.params.sid,
          usersDetail: '',
          linkedSurvey: [],
          linkedUser: []
        }

        this.handleChange = this.handleChange.bind(this);
     }

    componentDidMount(){
      this.getCompanyDropDown();
      this.getUsersDetails(this.state.company_id);
      this.getSurveyDropDown(this.state.company_id);
    }

    getUsersDetails($company_id) {
      axios.get(MyGlobleSetting.url + '/api/getaddusersurvey/'+ $company_id)
       .then(response => {
        if (response.data.length > 0) {
         this.setState({usersDetail: response.data});
        } else {
          this.setState({usersDetail: []})
        }

       })
       .catch(function (error) {
         console.log(error);
       })
    }

     getCompanyDropDown() {
      axios.get('/api/companydropdownlist')
       .then(response => {
        if (response.data.length > 0) {
            let companySelectItems = [];
            if (response.data instanceof Array) {
                response.data.map(function(item, key){
                    companySelectItems.push({label: item.company_name, value: item.company_id});
                })
            }
              this.setState({ companySelectItems: companySelectItems,
                company_id: this.state.company_id
              });
        }

       })
       .catch(function (error) {
         console.log(error);
       })
       
    }

    getSurveyDropDown($company_id) {
      axios.get('/api/getsurveys/' + $company_id)
       .then(response => {
        if (response.data.length > 0) {
            let surveySelectItems = [];
            if (response.data instanceof Array) {
                response.data.map(function(item, key){
                    surveySelectItems.push({label: item.survey_name, value: item.survey_id});
                })
            }
                this.setState({ surveySelectItems: surveySelectItems });
        } else {
          this.setState({surveySelectItems: []});
        }

       })
       .catch(function (error) {
         console.log(error);
       })
       
    }

    onSubmit(e){
        e.preventDefault();
        const {company_id} = this.state ;
         for (var i=0 ; i<this.state.linkedSurvey.length ; i++) {
          let survey_id = this.state.linkedSurvey[i],
              user_id = this.state.linkedUser[i];
          axios.post(MyGlobleSetting.url + '/api/addusertosurvey', {
              survey_id,
              company_id,
              user_id
            })
            .then(response=> {
             this.setState({err: false});
             this.props.history.push("edit-admin-survey") ;
            })
            .catch(error=> {
              this.setState({err: true});
            });
        }
     }

     onChange(e){
        const {name, value} = e.target ;
        this.setState({[name]: value});
     }

    tabRow() {
      let self = this;
      if (this.state.usersDetail instanceof Array) {
          return this.state.usersDetail.map(function(item, key){
            return (
              <tr key ={key}>
                <td> {item.name} </td>
                <td> {item.email} </td>
                <td> {item.survey_name} </td>
                <td> {item.status} </td>
                <td></td>
              </tr>
              )
          })
      }
    }

    handleChange(i, value, user_id) {
      let linkedSurvey = [...this.state.linkedSurvey],
          linkedUser = [...this.state.linkedUser];
      linkedSurvey[i] = value;
      linkedUser[i] = user_id;
      this.setState({ linkedSurvey, linkedUser });
    }

    reloadUsers($company_id) {
      this.getUsersDetails($company_id);
      this.setState({company_id: $company_id });
      this.getSurveyDropDown($company_id );
    }

    render() {
        let error = this.state.err ;
        let msg = (!error) ? 'Updated Successfully' : 'Oops! , Something went wrong.' ;
        let name = (!error) ? 'alert alert-success' : 'alert alert-danger' ;
        return (   
             <div className="add-user-survey">   
                <Nav link="admin" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="panel panel-default">
                                <div className="panel-heading">Update Form</div>
                                <div className="panel-body">
                                    <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                                        {error != undefined && <div className={name} role="alert">{msg}</div>}
                                    </div>   
                                    <form className="form-horizontal" role="form" method="POST" onSubmit= {this.onSubmit.bind(this)}>
                                        <div className="form-group">
                                            <label for="company" className="col-md-4 control-label">Select Company:</label>

                                            <div className="col-md-6">
                                                <Dropdown style={{width: '80%'}} value={parseInt(this.state.company_id)} options={this.state.companySelectItems} onChange={(e) => {this.reloadUsers(e.value)}} placeholder="Select a Company"/>
                                            </div>

                                            <label for="company" style={{marginTop: '15px'}} className="col-md-4 control-label">Select Survey:</label>

                                            <div className="col-md-6">
                                                <Dropdown style={{width: '80%', marginTop: '20px'}} value={parseInt(this.state.survey_id)} options={this.state.surveySelectItems} onChange={(e) => {this.reloadUsers(e.value)}} placeholder="Select a Survey"/>
                                            </div>
                                        </div>

                                        <div className="form-group table-responsive">
                                          <table className="table table-bordered">
                                            <thead>
                                              <tr>
                                                <th> User Name </th>
                                                <th> User Email </th>
                                                <th> Survey Name </th>
                                                <th>Status</th>
                                                <th> View Form</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              {this.tabRow()}
                                            </tbody>
                                          </table>
                                        </div>
                                    </form>
                                    <Link to="/admin-survey">View Surveys</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        )
      }
}

export default AddUserSurvey