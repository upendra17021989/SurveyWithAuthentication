import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Index from './components/index';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import Forgot from './components/forgot';
import Reset from './components/reset';
import DisplaySurvey from './components/DisplaySurvey';
import AdminHome from './components/AdminHome';
import CreateCompany from './components/CreateCompany';
import CreateForm from './components/CreateForm';
import CreateAdminQuestion from './components/CreateAdminQuestion';
import DisplayCompany from './components/DisplayCompany';
import DisplayForm from './components/DisplayForm';
import DisplayAdminQuestion from './components/DisplayAdminQuestion';
import EditCompany from './components/EditCompany';
import EditForm from './components/EditForm';


ReactDOM.render(
	<Router>
	    <Switch>
	    <Route exact path='/' component={Index}/>
	    <Route path='/login' component={Login}/>
	    <Route path='/register' component={Register}/>
	    <Route path='/user-home' component={DisplaySurvey}/>
	    <Route path='/admin-home' component={AdminHome}/>
	    <Route path='/create-company' component={CreateCompany}/>
	    <Route path='/create-form' component={CreateForm}/>
	    <Route path='/create-question/:id' component={CreateAdminQuestion}/>
	    <Route path='/company' component={DisplayCompany}/>
	    <Route path='/form' component={DisplayForm}/>
	    <Route path='/admin-question/:id' component={DisplayAdminQuestion}/>
	    <Route path='/edit-company/:id' component={EditCompany}/>
	    <Route path='/edit-form/:id' component={EditForm}/>
	    <Route path='/forgotpassword' component={Forgot}/>
	    <Route path='/password/reset/:token' component={Reset}/>
	</Switch>
	</Router>,
    document.getElementById('app')
);