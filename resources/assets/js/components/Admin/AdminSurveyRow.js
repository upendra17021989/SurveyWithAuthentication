import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyGlobleSetting from '../MyGlobleSetting';
import axios from 'axios';
import {Button} from 'primereact/button';


class AdminSurveyRow extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if(confirm("Do You Really Want to delete?")) {
      let uri = MyGlobleSetting.url + `/api/deleteadminsurvey/${this.props.obj.survey_id}`;
      axios.get(uri)
       .then(response => {
        this.props.handleSubmit();
       })
       .catch(function (error) {
         console.log(error);
       })
      }
  }

  render() {
    return (
        <tr>
          <td>{this.props.obj.survey_name}</td>
          <td>{this.props.obj.company_name}</td>
          <td>{this.props.obj.form_name}</td>
          <td>{this.props.obj.start_dt}</td>
          <td>{this.props.obj.end_dt}</td>
          <td><Link to={"add-user-survey/" + this.props.obj.company_id + "/" + this.props.obj.survey_id} className="btn btn-primary">View Users Status</Link></td>
          <td><Link to={"edit-admin-survey/"+this.props.obj.survey_id} className="btn btn-primary">Edit</Link></td>
          <td><form onSubmit={this.handleSubmit}>
                <input type="submit" value="Delete" className="btn btn-danger"/>
              </form>
          </td>
        </tr>
    );
  }
}


export default AdminSurveyRow;