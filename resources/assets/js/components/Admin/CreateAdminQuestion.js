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
          options: [],
          showOption: true
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
          })
          .catch(error=> {

            this.setState({err: true});
          });
     }

    onChange(e){
        const {name, value} = e.target ;
        this.setState({[name]: value});
    }

    onDropDownChange(value){
      if (value == 'OE') {
        this.setState({
          question_type: value,
          showOption: false
        });
      } else {
        this.setState({
          question_type: value,
          showOption: true
        });
      }
    }

    createUI(){
      return this.state.options.map((el, i) => 
        <tr key = {i} >
          <td>
            <label className="control-label">Options:</label>
          </td>
          <td>
            <input type="text" className="form-control" value={el||''} onChange={this.handleChange.bind(this, i)} required />
          </td>
          <td>
            <input type='button' className="btn btn-primary" value='remove' onClick={this.removeClick.bind(this, i)}/>
          </td>
        </tr>
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
                <div className="container create-admin-question">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="panel panel-default">
                                <div className="panel-heading">Add Question</div>
                                <div className="panel-body">
                                    <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                                        {error != undefined && <div className={name} role="alert">{msg}</div>}
                                    </div>   
                                    <form className="form-horizontal" role="form" method="POST" onSubmit= {this.onSubmit.bind(this)}>
                                      <div className="form-group table-responsive" style={{width: '100%'}}>
                                        <table className="table">
                                          <tbody>
                                            <tr>
                                              <td>    
                                                <label>Question:</label>
                                              </td>
                                              <td>
                                                <InputTextarea className="form-control" rows={5} cols={70} value={this.state.questionDescription} onChange={(e) => this.setState({questionDescription: e.target.value})} required />
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>
                                                <label>Type:</label>
                                              </td>
                                              <td>
                                                <Dropdown value={this.state.question_type} options={questionTypes} onChange={(e) => {this.onDropDownChange(e.value)}} placeholder="Select a Type"/>
                                              </td>
                                            </tr>
                                            {this.state.showOption && this.createUI()}
                                            <tr>
                                              <td></td>
                                              <td>
                                                {this.state.showOption &&  <input style={{"marginRight" : "20px" }} className="btn btn-primary" type='button' value='Add More Options' onClick={this.addClick.bind(this)}/> }
                                                <button type="submit" className="btn btn-primary create-btn">
                                                    Create
                                                </button>
                                              </td>
                                            </tr>
                                          </tbody>
                                          </table>
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