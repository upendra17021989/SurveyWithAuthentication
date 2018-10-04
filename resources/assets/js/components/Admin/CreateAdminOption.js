import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../navbar';
import axios from 'axios';

const divStyle = {
  display: 'inline-flex',
  paddingTop: '10px'
};

class CreateAdminOption extends Component {

    constructor(props){
        super(props);
        this.state = {
          form_id: props.match.params.fid,
          question_id: props.match.params.qid,
          description : '',
          options: []
        }
     }

  createUI(){
    return this.state.options.map((el, i) => 
       <div key={i} className="col-md-8" style={divStyle}>
          <label for="description" className="col-md-6 control-label">Description</label>
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

    onSubmit(e){
        let self = this;
        const {form_id, question_id} = this.state;
        e.preventDefault();
        for (var i=0 ; i<this.state.options.length ; i++) {
          let description = this.state.options[i];
            
          axios.post('/api/createoption', {
              form_id,
              question_id,
              description
            })
            .then(response=> {
             self.setState({err: false});
             //self.props.history.push("create-option") ;
            })
            .catch(error=> {
              self.setState({err: true});
            });
        }
     }

     onChange(e){
        const {name, value} = e.target ;
        this.setState({[name]: value});
     }

    addClick(){
      this.setState(prevState => ({ options: [...prevState.options, '']}))
    }

    removeClick(i){
      let options = [...this.state.options];
      options.splice(i,1);
      this.setState({ options });
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
                                          {this.createUI()}
                                      </div>
                                        <div className="form-group">
                                            <div className="col-md-6 col-md-offset-4">
                                              <table>
                                              <tr>
                                              <td width="200px">
                                              <input className="btn btn-primary" type='button' value='add more' onClick={this.addClick.bind(this)}/> 
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