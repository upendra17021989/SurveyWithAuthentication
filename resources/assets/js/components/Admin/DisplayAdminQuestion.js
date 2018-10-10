import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import axios from 'axios';
import MyGlobleSetting from '../MyGlobleSetting';
import Nav from '../navbar';
import { Link } from 'react-router-dom';
import AdminQuestionRow from './AdminQuestionRow';

class DisplayAdminQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company_id: props.match.params.cid,
      form_id: props.match.params.fid,
      isCompleted: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);

  }


    componentDidMount(){
      this.apiCall();
       
     }

    apiCall() {
      axios.get(MyGlobleSetting.url + '/api/adminquestion/'+ this.state.form_id)
       .then(response => {
        if (response.data.length > 0) {
         this.setState({ questions: response.data });
        }

       })
       .catch(function (error) {
         console.log(error);
       })
       
    }

    tabRow() {
      let self = this;
      if (this.state.questions instanceof Array) {
          return this.state.questions.map(function(item, key){
            return <AdminQuestionRow obj={item} handleSubmit={self.handleSubmit} />;
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
                <div className="panel-heading">Question List</div>
                <div className="panel-body">   
                <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                  {error != undefined && <div className={name} role="alert">{msg}</div>}
                </div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Question</th>
                        <th>Type</th>
                        <th>Created Date</th>
                        <th>Updated Date</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.tabRow()}
                   </tbody>
                   <tr>
                    <td><Link to={"/create-question/" + this.state.company_id + "/" + this.state.form_id}>Create Question</Link></td>
                    <td></td>
                    <td><Link to={"/form/" + this.state.company_id}>View Forms</Link></td>
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
export default DisplayAdminQuestion;