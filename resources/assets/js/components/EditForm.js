import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './navbar';
import axios from 'axios';
import MyGlobleSetting from './MyGlobleSetting';

class EditForm extends Component {

    constructor(props){
        super(props);
        this.state = {
          id: props.match.params.id,
          name: '',
          description : ''
        }
     }

    componentDidMount(){
      this.apiCall();
    }

    apiCall() {
      axios.get(MyGlobleSetting.url + '/api/showform/'+ this.state.id)
       .then(response => {
        if (response.data.length > 0) {
         this.setState({ name: response.data[0].form_name,
                        description: response.data[0].form_description,
                        created_at: response.data[0].created_at,
                        updated_at: response.data[0].updated_at});
        }

       })
       .catch(function (error) {
         console.log(error);
       })
       
    }

    onSubmit(e){
        e.preventDefault();
        const {id, name, description} = this.state ;
        axios.post(MyGlobleSetting.url + '/api/updateform', {
            id,
            name,
            description
          })
          .then(response=> {
           this.setState({err: false});
           this.props.history.push("edit-form") ;
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
                                            <label for="name" className="col-md-4 control-label">Name</label>

                                            <div className="col-md-6">
                                                <input id="name"  value={this.state.name} type="text" className="form-control" ref="name" name="name" onChange={this.onChange.bind(this)} required autofocus />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label for="address" className="col-md-4 control-label">Description</label>

                                            <div className="col-md-6">
                                                <input id="description" value={this.state.description} type="text" className="form-control" ref="description" name="description" onChange={this.onChange.bind(this)} required />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label for="created_at" className="col-md-4 control-label">Created Date</label>

                                            <div className="col-md-6">
                                                <label for="created_at" className="col-md-8">{this.state.created_at}</label>
                                            </div>
                                        </div>


                                        <div className="form-group">
                                            <label for="updated_at" className="col-md-4 control-label">Updated Date</label>

                                            <div className="col-md-6">
                                                <label for="updated_at" className="col-md-8">{this.state.updated_at}</label>
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
                                    <Link to="/form">View Form</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        )
      }
}

export default EditForm