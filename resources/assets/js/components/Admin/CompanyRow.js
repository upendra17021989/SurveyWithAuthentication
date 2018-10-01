import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyGlobleSetting from '../MyGlobleSetting';
import axios from 'axios';


class CompanyRow extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if(confirm("Do You Really Want to delete?")) {
      let uri = MyGlobleSetting.url + `/api/deletecompany/${this.props.obj.company_id}`;
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
          <td>{this.props.obj.company_name}</td>
          <td>{this.props.obj.address}</td>
          <td>{this.props.obj.created_at}</td>
          <td>{this.props.obj.updated_at}</td>
          <td><Link to={"edit-company/"+this.props.obj.company_id} className="btn btn-primary">Edit</Link></td>
          <td><form onSubmit={this.handleSubmit}>
                <input type="submit" value="Delete" className="btn btn-danger"/>
              </form>
          </td>
        </tr>
    );
  }
}


export default CompanyRow;