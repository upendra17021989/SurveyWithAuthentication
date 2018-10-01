import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import axios from 'axios';
import MyGlobleSetting from '../MyGlobleSetting';
import Nav from '../navbar';
import { Link } from 'react-router-dom';
import AdminOptionRow from './AdminOptionRow';

class DisplayAdminOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
                  form_id: props.match.params.fid,
                  question_id: props.match.params.qid,
                  isCompleted: false
                };

    this.handleSubmit = this.handleSubmit.bind(this);

  }


    componentDidMount(){
      this.apiCall();
       
     }

    apiCall() {
      axios.get(MyGlobleSetting.url + '/api/adminoption/' + this.state.form_id + "/" + this.state.question_id)
       .then(response => {
        if (response.data.length > 0) {
         this.setState({ options: response.data });
        }

       })
       .catch(function (error) {
         console.log(error);
       })
       
    }

    tabRow() {
      let self = this;
      if (this.state.options instanceof Array) {
          return this.state.options.map(function(item, key){
            return <AdminOptionRow obj={item} handleSubmit={self.handleSubmit} />;
          })
        }
    }

    handleSubmit() {
      this.apiCall();
      this.setState({err: false});
    }

     
  render() {
      let error = this.state.err ;
      let msg = (!error) ? 'Delete Successfully' : 'Oops! , Something went wrong.' ;
      let name = (!error) ? 'alert alert-success' : 'alert alert-danger' ;
    return (
      <div>
        <Nav link="admin" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="panel panel-default">
                <div className="panel-heading">Option List</div>
                <div className="panel-body">   
                <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                  {error != undefined && <div className={name} role="alert">{msg}</div>}
                </div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Option</th>
                        <th>Created Date</th>
                        <th>Updated Date</th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.tabRow()}
                    </tbody>
                    <tr>
                      <td><Link className="" to={"/create-option/" + this.state.form_id + "/" + this.state.question_id }>Create Option</Link></td>
                      <td><Link className="" to={"/admin-question/" + this.state.form_id}> View Questions</Link></td>
                      <td><Link className="" to={"/form/"}> View Forms </Link></td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default DisplayAdminOption;