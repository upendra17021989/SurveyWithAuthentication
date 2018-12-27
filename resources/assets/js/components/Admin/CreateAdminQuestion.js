import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../navbar';
import axios from 'axios';
import {InputTextarea} from 'primereact/inputtextarea';
import {Dropdown} from 'primereact/dropdown';

const divStyle = {
  display: 'inline-flex',
  paddingTop: '10px'
};

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
          questionDescription : '',
          question_type: 'MCQ',
          options: []
        }
     }

    onSubmit(e){
        e.preventDefault();
        const {form_id, questionDescription, question_type, options} = this.state;

        axios.post('/api/createquestion', {
            form_id,
            questionDescription,
            question_type,
            options
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

    createUI(){
      return this.state.options.map((el, i) => 
         <div key={i} className="col-md-8" style={divStyle}>
            <label for="description" className="col-md-6 control-label">Options:</label>
            <input type="text" className="col-md-8 form-control" value={el||''} onChange={this.handleChange.bind(this, i)} required />
            <input type='button' className="btn btn-primary" value='remove' onClick={this.removeClick.bind(this, i)}/>
        </div>          
      )
    }

    handleChange(i, event) {
      let options = [...this.state.options];
      options[i] = event.target.value;
      this.setState({ options });
    }

    addClick(){
      this.setState(prevState => ({ options: [...prevState.options, '']}))
    }

    removeClick(i){
      let options = [...this.state.options];
      options.splice(i,1);
      this.setState({ options });
    }

    componentDidMount(){
      this.addClick();
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
                                          <div className="col-md-8">
                                            <label for="description" className="col-md-4 control-label">Question:</label>

                                            <div className="col-md-6">
                                              <InputTextarea rows={5} cols={70} value={this.state.questionDescription} onChange={(e) => this.setState({questionDescription: e.target.value})} />
                                            </div>
                                          </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-md-8">
                                              <label for="company_type" className="col-md-4 control-label">Type:</label>
                                              <Dropdown value={this.state.question_type} options={questionTypes} onChange={(e) => {this.setState({question_type: e.value})}} placeholder="Select a Type"/>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                          {this.createUI()}
                                        </div>

                                        <div className="form-group">
                                              <div className="col-md-6 col-md-offset-4">
                                                <table>
                                                <tr>
                                                <td width="200px">
                                                <input className="btn btn-primary" type='button' value='Add More Options' onClick={this.addClick.bind(this)}/> 
                                                </td>
                                                <td>
                                                  <button type="submit" className="btn btn-primary">
                                                      Create
                                                  </button>
                                                </td>
                                                </tr>
                                                </table>
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