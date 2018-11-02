import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../navbar';
import axios from 'axios';
import {InputTextarea} from 'primereact/inputtextarea';
import {Dropdown} from 'primereact/dropdown';

const questionTypes = [
  {label: 'Multiple Choice', value: 'MCQ'},
  {label: 'Open Ended', value: 'OE'}
];


class CreateAdminQuestion extends Component {

    constructor(props){
        super(props);
        this.state = {
          company_id: props.match.params.cid,
          form_id: props.match.params.fid,
          description : '',
          question_type: 'MCQ'
        }
     }

    onSubmit(e){
        e.preventDefault();
        const {form_id, description, question_type} = this.state;
        axios.post('/api/createquestion', {
            form_id,
            description,
            question_type
          })
          .then(response=> {
           this.setState({err: false});
           //this.props.history.push("create-question") ;
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
                                <div className="panel-heading">Add Question</div>
                                <div className="panel-body">
                                    <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                                        {error != undefined && <div className={name} role="alert">{msg}</div>}
                                    </div>   
                                    <form className="form-horizontal" role="form" method="POST" onSubmit= {this.onSubmit.bind(this)}>
                                        <div className="form-group">
                                            <label for="description" className="col-md-4 control-label">Description</label>

                                            <div className="col-md-6">
                                              <InputTextarea rows={5} cols={50} value={this.state.description} onChange={(e) => this.setState({description: e.target.value})} />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label for="company_type" className="col-md-4 control-label">Type</label>

                                            <div className="col-md-6">
                                              <Dropdown value={this.state.question_type} options={questionTypes} onChange={(e) => {this.setState({question_type: e.value})}} placeholder="Select a Type"/>
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
                                    <Link to={"/admin-question/" + this.state.form_id}>View Questions</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        )
      }
}

export default CreateAdminQuestion