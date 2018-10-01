import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Index from './components/index';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import Forgot from './components/forgot';
import Reset from './components/reset';
import DisplaySurvey from './components/Admin/DisplaySurvey';
import AdminHome from './components/Admin/AdminHome';
import DisplayAdminSurvey from './components/Admin/DisplayAdminSurvey';

import CreateCompany from './components/Admin/CreateCompany';
import CreateForm from './components/Admin/CreateForm';
import CreateAdminQuestion from './components/Admin/CreateAdminQuestion';
import CreateAdminOption from './components/Admin/CreateAdminOption';
import CreateAdminSurvey from './components/Admin/CreateAdminSurvey';

import DisplayCompany from './components/Admin/DisplayCompany';
import DisplayForm from './components/Admin/DisplayForm';
import DisplayAdminQuestion from './components/Admin/DisplayAdminQuestion';
import DisplayAdminOption from './components/Admin/DisplayAdminOption';

import EditCompany from './components/Admin/EditCompany';
import EditForm from './components/Admin/EditForm';
import EditAdminQuestion from './components/Admin/EditAdminQuestion';
import EditAdminOption from './components/Admin/EditAdminOption';
import EditAdminSurvey from './components/Admin/EditAdminSurvey';


ReactDOM.render(
	<Router>
	    <Switch>
	    <Route exact path='/' component={Index}/>
	    <Route path='/login' component={Login}/>
	    <Route path='/register' component={Register}/>
	    <Route path='/user-home' component={DisplaySurvey}/>
	    <Route path='/admin-home' component={AdminHome}/>
	    <Route path='/admin-survey' component={DisplayAdminSurvey}/>

	    <Route path='/create-company' component={CreateCompany}/>
	    <Route path='/create-form' component={CreateForm}/>
	    <Route path='/create-question/:id' component={CreateAdminQuestion}/>
	    <Route path='/create-option/:fid/:qid' component={CreateAdminOption}/>
	    <Route path='/create-admin-survey' component={CreateAdminSurvey}/>

	    <Route path='/company' component={DisplayCompany}/>
	    <Route path='/form' component={DisplayForm}/>
	    <Route path='/admin-question/:id' component={DisplayAdminQuestion}/>
	    <Route path='/admin-option/:fid/:qid' component={DisplayAdminOption}/>

	    <Route path='/edit-company/:id' component={EditCompany}/>
	    <Route path='/edit-form/:id' component={EditForm}/>
	    <Route path='/edit-question/:fid/:qid' component={EditAdminQuestion}/>
	    <Route path='/edit-option/:fid/:qid/:oid' component={EditAdminOption}/>
	    <Route path='/edit-admin-survey/:sid' component={EditAdminSurvey}/>

	    <Route path='/forgotpassword' component={Forgot}/>
	    <Route path='/password/reset/:token' component={Reset}/>
	</Switch>
	</Router>,
    document.getElementById('app')
);