import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import axios from 'axios';
import Nav from '../navbar';
import { Link } from 'react-router-dom';
import {Dropdown} from 'primereact/dropdown';

class AdminUser extends Component {
  constructor(props){
        super(props);
        this.state = {
          companyName: '',
          file : {}
        }
     }


    componentDidMount(){
      this.getCompanyDropDown();
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

    onSubmit(e){
       e.preventDefault();
      
      const {company_id, file} = this.state;
      
      let data = new FormData();
      data.set('company_id', company_id);
      data.set('file', file);

      const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
      }

      axios.post('api/import', data,
       config)
        .then(response=> {
          if (response.data[0].status == 'error') {
            this.setState({err: true, erroMessage: response.data[0].message}); 
          } else {
            this.setState({err: false}); 
          }
           
           this.props.history.push("admin-user") ;
          })
          .catch(error=> {
            this.refs.companyName.value="";
            this.refs.file.value="";
            this.setState({err: true});
          });
     }

     onChange(e){
        const {name, value} = e.target ;
        if (name == 'file') {
          this.setState({[name]: e.target.files[0]})
        } else {
          this.setState({[name]: value});
        }
     }

    render() {
        let error = this.state.err ;
        let msg = (!error) ? 'Created Successfully' : this.state.erroMessage || 'Oops! , Something went wrong.' ;
        let name = (!error) ? 'alert alert-success' : 'alert alert-danger' ;
        return (   
             <div>   
                <Nav link="admin" />
                <div className="container admin-user">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="panel panel-default">
                                <div className="panel-heading">Add Users</div>
                                <div className="panel-body">
                                    <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                                        {error != undefined && <div className={name} role="alert">{msg}</div>}
                                    </div>   
                                    <form className="form-horizontal" role="form" onSubmit= {this.onSubmit.bind(this)}>
                                        <div className="form-group">
                                            <label for="name" className="col-md-4 control-label">Company Name</label>

                                            <div className="col-md-6">
                                                <Dropdown style={{width: '100%'}} value={this.state.company_id} options={this.state.companySelectItems} onChange={(e) => {this.setState({company_id: e.value})}} placeholder="Select a Company" required/>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label for="filename" className="col-md-4 control-label">Select File:</label>

                                            <div className="col-md-6">
                                                <input id="file" type="file" ref="file" name="file" onChange={this.onChange.bind(this)} required />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-md-6 col-md-offset-4">
                                                <input type="submit" className="btn btn-primary" value='upload'>
                                                </input>
                                            </div>
                                        </div>
                                    </form>
                                    <Link to="/company">View Company</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        )
      }
}
export default AdminUser;