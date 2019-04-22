import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();


class Nav extends Component {

  constructor(props){
      super(props);
  } 
  
  logout(e){
       e.preventDefault();  
       axios.post('/api/logout')
          .then(response=> {
            cookies.remove('username');
            this.props.history.push('/');
          })
          .catch(error=> {
            console.log(error);
          });
  }
  
  handleClick(e){

    e.preventDefault();
    this.props.history.push({
      pathname: '/user-home',
      state: {
              user_id: this.props.location.state.user_id,
              company_id: this.props.location.state.company_id 
            }
    });

  }

  componentDidMount(){
    if (!cookies.get('username') && ['/login', '/products','/letsstart'].indexOf(this.props.location.pathname) == -1 ) {
      this.props.history.push('/');
    }
  }

  render() {

    if (this.props.link == 'admin') {
      return (
  
        <nav className="navbar navbar-default">
          <div className="container-fluid">
              <div className="navbar-header">
                <Link className="navbar-brand" to="/admin-home">Admin Home</Link>
              </div>
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/admin-user">Users</Link></li>
                <li><Link to="/admin-survey">Survey</Link></li>
                <li><Link to="/company">Company</Link></li>
                <li><Link to="/form">Form</Link></li>
                <li><a className="navbar-brand" href="#" onClick={this.logout.bind(this)}>Logout</a></li>
              </ul>
          </div>
        </nav>
        )
    }

    if (this.props.link) {
      return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#" onClick={this.handleClick.bind(this)}><img className="logo" src="/images/logo.png" alt="EMP. Metrics" /></a>
              </div>
              <ul className="nav navbar-nav navbar-right">
                <li><span>Hello {this.props.location.state && this.props.location.state.user_id},</span></li>
                <li> <a className="navbar-brand" href="#" onClick={this.logout.bind(this)}>{this.props.link}</a> </li> 
              </ul>
          </div>
        </nav>
        )
    }
    return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
              <div className="navbar-header"><Link to="/"><img className="logo" src="/images/logo.png" alt="EMP. Metrics" /></Link>
              </div>
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/">Why Survey</Link></li>
                <li><Link to="/letsstart">Let's Start</Link></li>
                <li><Link to="/login">Login</Link></li>
              </ul>
          </div>
        </nav>
      
    )
  }

}

export default  withRouter(Nav)