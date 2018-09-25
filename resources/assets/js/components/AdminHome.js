import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import Nav from './navbar'

class AdminHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
                  value: ''
                };
  }


    componentDidMount(){
    }

  render() {
    return (
      <div>
        <Nav link="admin" />
        <div className="container text-center title">
          <h1>Welcome to Admin Page!</h1>
        </div>
      </div>
  )}
}
export default AdminHome;