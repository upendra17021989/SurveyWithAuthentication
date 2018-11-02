import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../navbar'
import axios from 'axios'
import {Dropdown} from 'primereact/dropdown';
import {Calendar} from 'primereact/calendar';
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

class CreateAdminSurvey extends Component {

    constructor(props){
        super(props);
        this.state = {
          company_id: '',
          form_id : '',
          survey_name: '',
          start_dt: '',
          end_dt:''
        }
     }

    componentDidMount(){
      this.getCompanyDropDown();
      this.getFormDropDown();
    }

    componentWillMount(){
      this.getFormDropDown();
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

    getFormDropDown(value) {
      if (value) {
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

         this.setState({company_id : value });
       }
       
    }

    onSubmit(e){
        e.preventDefault();
        const {company_id, form_id, survey_name, start_dt, end_dt} = this.state ;
        axios.post('api/createadminsurvey', {
            company_id,
            form_id,
            survey_name,
            start_dt,
            end_dt
          })
          .then(response=> {
           this.setState({err: false});
           this.props.history.push("create-admin-survey");
          })
          .catch(error=> {
            this.refs.survey_name.value="";
            this.setState({err: true});
          });
     }

     onChange(e){
        const {name, value} = e.target ;
        this.setState({[name]: value});
     }

    render() {
        let error = this.state.err ;
        let msg = (!error) ? 'Created Successfully' : 'Oops! , Something went wrong.' ;
        let name = (!error) ? 'alert alert-success' : 'alert alert-danger' ;
        return (   
             <div>   
                <Nav link="admin" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="panel panel-default">
                                <div className="panel-heading">Add New Survey</div>
                                <div className="panel-body">
                                    <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                                        {error != undefined && <div className={name} role="alert">{msg}</div>}
                                    </div>   
                                    <form className="form-horizontal" role="form" method="POST" onSubmit= {this.onSubmit.bind(this)}>
                                        <div className="form-group">
                                            <label for="company" className="col-md-4 control-label">Select Company</label>

                                            <div className="col-md-6">
                                                <Dropdown style={{width: '100%'}} value={this.state.company_id} options={this.state.companySelectItems} onChange={(e) => {this.getFormDropDown(e.value)}} placeholder="Select a Company"/>
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
                                                <input id="survey_name" type="text" className="form-control" ref="survey_name" name="survey_name" onChange={this.onChange.bind(this)} required />
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
                                                    Create
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

export default CreateAdminSurvey