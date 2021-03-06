import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyGlobleSetting from '../MyGlobleSetting';
import axios from 'axios';


class AdminQuestionRow extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if(confirm("Do You Really Want to delete?")) {
      let uri = MyGlobleSetting.url + `/api/deletequestion/${this.props.obj.form_id}/${this.props.obj.question_id}`;
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
          <td>{this.props.obj.question_description}</td>
          <td>{this.props.obj.question_type}</td>
          <td>{this.props.obj.created_at}</td>
          <td>{this.props.obj.updated_at}</td>
          <td><Link to={this.props.obj.question_type == 'OE' ? '#' : "/admin-option/" + this.props.obj.form_id + "/" + this.props.obj.question_id} disabled={this.props.obj.question_type == 'OE'} className="btn btn-primary">Options</Link></td>
          <td><Link to={"/edit-question/" + this.props.obj.form_id + "/" + this.props.obj.question_id} className="btn btn-primary">Edit</Link></td>
          <td><form onSubmit={this.handleSubmit}>
                <input type="submit" value="Delete" className="btn btn-danger"/>
              </form>
          </td>
        </tr>
    );
  }
}


export default AdminQuestionRow;