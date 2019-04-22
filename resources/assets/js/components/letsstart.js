import React, { Component } from 'react'
import Nav from './navbar'
import { Link } from 'react-router-dom';

class LetsStart extends Component {

  constructor(props){
        super(props);
        this.state = {
            email : '',
            password: '',
        }
     }

     onSubmit(e){
        e.preventDefault();
        const {email , password} = this.state ;
        axios.post('api/login', {
            email, 
            password
            })
            .then(response=> {
                axios.get('/api/user/'+email)
                .then(response => {
                    if (response.data.length > 0) {
                        this.setState({err: false});
                        cookies.set('username', response.data[0].name);
                        if (response.data[0].user_type == 'admin') {
                            this.props.history.push("admin-home") ;    
                        } else {
                            this.props.history.push({
                                pathname:"/user-home",
                                state: {
                                    user_id : this.state.email,
                                    company_id: response.data[0].company_id
                            }
                        });
                        }
                    }
                }).catch(error=> {
                    this.setState({err: true})
                });
            })
          .catch(error=> {
            this.refs.email.value="";
            this.refs.password.value="";
            this.setState({err: true});
          });
     }

     onChange(e){
        const {name, value} = e.target;
        this.setState({[name]: value});
     }

  render() {

    let error = this.state.err ;
    let msg = (!error) ? 'Login Successful' : 'Wrong Credentials' ;
    let name = (!error) ? 'alert alert-success' : 'alert alert-danger' ;

    return (
       <div >
                <Nav />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="panel panel-default">
                                <div className="panel-heading"><strong>Lets Start</strong></div>
                                <div className="panel-body">   
                                    <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                                        {error != undefined && <div className={name} role="alert">{msg}</div>}
                                    </div>  
                                    <form className="form-horizontal" role="form" method="POST" onSubmit= {this.onSubmit.bind(this)}>
                                        
                                        <div className="form-group">
                                            <label for="email" className="col-md-4 control-label">Name</label>

                                            <div className="col-md-6">
                                                <input id="email" type="email" ref="email" className="form-control" name="email"  onChange={this.onChange.bind(this)} required />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label for="email" className="col-md-4 control-label">Last name</label>

                                            <div className="col-md-6">
                                                <input id="email" type="email" ref="email" className="form-control" name="email"  onChange={this.onChange.bind(this)} required />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label for="email" className="col-md-4 control-label">Company name</label>

                                            <div className="col-md-6">
                                                <input id="email" type="email" ref="email" className="form-control" name="email"  onChange={this.onChange.bind(this)} required />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label for="email" className="col-md-4 control-label">E-Mail Address</label>

                                            <div className="col-md-6">
                                                <input id="email" type="email" ref="email" className="form-control" name="email"  onChange={this.onChange.bind(this)} required />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label for="email" className="col-md-4 control-label">Number of employees</label>

                                            <div className="col-md-6">
                                                <input id="email" type="email" ref="email" className="form-control" name="email"  onChange={this.onChange.bind(this)} required />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label for="email" className="col-md-4 control-label">Phone number</label>

                                            <div className="col-md-6">
                                                <input id="email" type="email" ref="email" className="form-control" name="email"  onChange={this.onChange.bind(this)} required />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label for="email" className="col-md-4 control-label">Country</label>

                                            <div className="col-md-6">
                                                <input id="email" type="email" ref="email" className="form-control" name="email"  onChange={this.onChange.bind(this)} required />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label for="email" className="col-md-4 control-label">Best time to connect</label>

                                            <div className="col-md-6">
                                                <input id="email" type="email" ref="email" className="form-control" name="email"  onChange={this.onChange.bind(this)} required />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-md-8 col-md-offset-4">
                                                <button type="submit" className="btn btn-primary">
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
  }

}

export default LetsStart
