import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../navbar';
import axios from 'axios';

class CreateAdminOption extends Component {

    constructor(props){
        super(props);
        this.state = {
          form_id: props.match.params.fid,
          question_id: props.match.params.qid,
          description : ''
        }
     }

    onSubmit(e){
        e.preventDefault();
        const {form_id, question_id, description} = this.state;
        axios.post('/api/createoption', {
            form_id,
            question_id,
            description
          })
          .then(response=> {
           this.setState({err: false});
           this.props.history.push("create-option") ;
          })
          .catch(error=> {
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
        let msg = (!error) ? 'Created Successfully' : 'Oops! , Something went wrong.' ;
        let name = (!error) ? 'alert alert-success' : 'alert alert-danger' ;
        return (   
             <div>   
                <Nav link="admin" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="panel panel-default">
                                <div className="panel-heading">Add Option</div>
                                <div className="panel-body">
                                    <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                                        {error != undefined && <div className={name} role="alert">{msg}</div>}
                                    </div>   
                                    <form className="form-horizontal" role="form" method="POST" onSubmit= {this.onSubmit.bind(this)}>
                                        <div className="form-group">
                                            <label for="description" className="col-md-4 control-label">Description</label>

                                            <div className="col-md-6">
                                                <input id="description" type="text" className="form-control" ref="description" name="description" onChange={this.onChange.bind(this)} required />
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
                                    <Link to={"/admin-option/"+ this.state.form_id + "/" + this.state.question_id}>View Options</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        )
      }
}

export default CreateAdminOption