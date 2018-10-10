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
          company_id: props.match.params.cid,
          survey_id: props.match.params.sid,
          survey_name: '',
        }
     }

    componentDidMount(){
      this.getCompanyDropDown();
      this.getFormDropDown();
      this.apiCall();
    }

    apiCall() {
      axios.get(MyGlobleSetting.url + '/api/showadminsurvey/'+ this.state.survey_id)
       .then(response => {
        if (response.data.length > 0) {
          let start_date = new Date(response.data[0].start_dt),
              end_date = new Date(response.data[0].end_dt);
         this.setState({ company_id: response.data[0].company_id,
                        form_id: response.data[0].form_id,
                        survey_name: response.data[0].survey_name,
                        start_dt: start_date,
                        end_dt: end_date
                      });
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
                this.setState({ companySelectItems: companySelectItems });
        }

       })
       .catch(function (error) {
         console.log(error);
       })
       
    }

    getFormDropDown() {
      axios.get('/api/formdropdownlist')
       .then(response => {
        if (response.data.length > 0) {
            let formSelectItems = [];
            if (response.data instanceof Array) {
                response.data.map(function(item, key){
                    formSelectItems.push({label: item.form_name, value: item.form_id});
                })
            }
                this.setState({ formSelectItems: formSelectItems });
        }

       })
       .catch(function (error) {
         console.log(error);
       })
       
    }

    onSubmit(e){
        e.preventDefault();
        const {survey_id, company_id, form_id, survey_name, start_dt, end_dt} = this.state ;
        axios.post(MyGlobleSetting.url + '/api/updateadminsurvey', {
            survey_id,
            company_id,
            form_id,
            survey_name,
            start_dt,
            end_dt
          })
          .then(response=> {
           this.setState({err: false});
           this.props.history.push("edit-admin-survey") ;
          })
          .catch(error=> {
            this.refs.name.value="";
            this.refs.description.value="";
            this.setState({err: true});
          });
     }

     onChange(e){
        const {name, value} = e.target ;
        this.setState({[name]: value});
     }

    render() {
        let error = this.state.err ;
        let msg = (!error) ? 'Updated Successfully' : 'Oops! , Something went wrong.' ;
        let name = (!error) ? 'alert alert-success' : 'alert alert-danger' ;
        return (   
             <div>   
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
                                            <label for="company" className="col-md-4 control-label">Select Company</label>

                                            <div className="col-md-6">
                                                <Dropdown style={{width: '100%'}} value={this.state.company_id} options={this.state.companySelectItems} onChange={(e) => {this.setState({company_id: e.value})}} placeholder="Select a Company"/>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label for="form" className="col-md-4 control-label">Select Form</label>

                                            <div className="col-md-6">
                                                <Dropdown style={{width: '100%'}} value={this.state.form_id} options={this.state.formSelectItems} onChange={(e) => {this.setState({form_id: e.value})}} placeholder="Select a Form"/>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label for="name" className="col-md-4 control-label">Survey Name</label>

                                            <div className="col-md-6">
                                                <input id="survey_name" value={this.state.survey_name} type="text" className="form-control" ref="survey_name" name="survey_name" onChange={this.onChange.bind(this)} required />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label for="start_dt" className="col-md-4 control-label">Start Date</label>

                                            <div className="col-md-6">
                                                <Calendar dateFormat="dd/mm/yy" value={this.state.start_dt} onChange={(e) => this.setState({start_dt: e.value})}></Calendar>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label for="end_dt" className="col-md-4 control-label">End Date</label>

                                            <div className="col-md-6">
                                                <Calendar dateFormat="dd/mm/yy" value={this.state.end_dt} onChange={(e) => this.setState({end_dt: e.value})}></Calendar>
                                            </div>
                                        </div>


                                        <div className="form-group">
                                            <div className="col-md-6 col-md-offset-4">
                                                <button type="submit" className="btn btn-primary">
                                                    Update
                                                </button>
                                            </div>
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