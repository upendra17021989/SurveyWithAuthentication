import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../navbar';
import axios from 'axios';
import MyGlobleSetting from '../MyGlobleSetting';
import {Dropdown} from 'primereact/dropdown';
import {Calendar} from 'primereact/calendar';
import {OverlayPanel} from 'primereact/overlaypanel';
import {Button} from 'primereact/button';

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
        this.exportAll = this.exportAll.bind(this);
        this.emailAll = this.emailAll.bind(this);
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

      emailAll() {
        const {company_id, survey_id} = this.state ;
         axios.post(MyGlobleSetting.url + '/api/mailall', {
              company_id,
              survey_id
            })
            .then(response=> {
              console.log('response',response);
            })
            .catch(error=> {
              this.setState({err: true});
            });
      }

      exportAll() {
        const {company_id, survey_id} = this.state ;
        console.log('check:',document.querySelector('meta[name="csrf-token"]').getAttribute('content'));
        axios.defaults.headers.common = {
            'X-Requested-With': 'XMLHttpRequest',
            'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        };

         axios.post(MyGlobleSetting.url + '/api/exportall', {
              company_id,
              survey_id
            })
            .then(response=> {
              var a = document.createElement("a");
                a.href = response.data.file; 
                a.download = response.data.name;
                document.body.appendChild(a);
                a.click();
                a.remove();
            })
            .catch(error=> {
              this.setState({err: true});
            });
      }



      export(e) {
        let email = e.currentTarget.getAttribute('data');
         axios.post(MyGlobleSetting.url + '/api/export', {
              email
            })
            .then(response=> {
              var a = document.createElement("a");
                a.href = response.data.file; 
                a.download = response.data.name;
                document.body.appendChild(a);
                a.click();
                a.remove();
            })
            .catch(error=> {
              this.setState({err: true});
            });
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
                <td>{( item.status == 'submitted') &&  <Button type="button" className="ui-button-secondary" label="View Data" onClick={(e) => this.getModalUsersDetails(e, item.email)} />}</td>
                <td>{( item.status == 'submitted') &&  <Button type="button" className="ui-button-success" label="export" onClick= {this.export} data = {item.email} />} </td>
              </tr>
              )
          }, this)
      }
    }

    modalTabRow() {
      let self = this;
      if (this.state.submissionDetails instanceof Array) {
        return this.state.submissionDetails.map(function(item, key){
          return (
            <tr key={key}>
              <td> {item.question_description} </td>
              <td> {item.answer_description} </td>
            </tr>
          )
        })
      }
    }

    getModalUsersDetails(e, $email) {
      axios.get(MyGlobleSetting.url + '/api/getusersurveydata/'+ $email)
       .then(response => {
        if (response.data.length > 0) {
         this.setState(
                    {
                      submissionDetails: response.data,
                      modalEmail : $email
                    }
          );

         this.op.show(e);

        } else {
          this.setState({submissionDetails: [],
                        modalEmail: ''})
        }
       })
       .catch(function (error) {
         console.log(error);
       })
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
                      <OverlayPanel ref={(el) => this.op = el} showCloseIcon={true} dismissable={true}>
                        <table className="table table-bordered">
                            <caption><b>User Survey Detail of {this.state.modalEmail}</b></caption>
                            <thead>
                              <tr>
                                <th> Question </th>
                                <th> Answer </th>
                              </tr>
                            </thead>
                            <tbody>
                              {this.modalTabRow()}
                            </tbody>
                        </table>
                      </OverlayPanel>
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
                                            <label className="col-md-4 control-label">Select Company:</label>

                                            <div className="col-md-6">
                                                <Dropdown style={{width: '80%'}} value={parseInt(this.state.company_id)} options={this.state.companySelectItems} onChange={(e) => {this.reloadUsers(e.value)}} placeholder="Select a Company"/>
                                            </div>

                                            <label style={{marginTop: '15px'}} className="col-md-4 control-label">Select Survey:</label>

                                            <div className="col-md-6">
                                                <Dropdown style={{width: '80%', marginTop: '20px'}} value={parseInt(this.state.survey_id)} options={this.state.surveySelectItems} onChange={(e) => {this.reloadUsers(e.value)}} placeholder="Select a Survey"/>
                                            </div>

                                            <div className="col-md-10 functional-cta">
                                                <button type="button" id="email-all" onClick= {this.emailAll}> Send Email</button>
                                                <button type="button" id = "export-all" onClick= {this.exportAll} >Export All</button>
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
                                                <th> Export</th>
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