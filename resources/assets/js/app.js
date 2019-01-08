import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Index from './components/index';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import Forgot from './components/forgot';
import Reset from './components/reset';
//import DisplaySurvey from './components/User/DisplaySurvey';
import UserSurveyHome from './components/User/UserSurveyHome';
import SinglePageSurvey from './components/User/SinglePageSurvey';
import ViewUserSurveyData from './components/User/ViewUserSurveyData';
import AdminHome from './components/Admin/AdminHome';
import DisplayAdminSurvey from './components/Admin/DisplayAdminSurvey';
import AdminUser from './components/Admin/AdminUser';

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
import AddUserSurvey from './components/Admin/AddUserSurvey';

import SurveyComplete from './components/User/SurveyComplete';
import AlreadyComplete from './components/User/AlreadyComplete';


ReactDOM.render(
	<Router>
	    <Switch>
	    <Route exact path='/' component={Index}/>
	    <Route path='/login' component={Login}/>
	    <Route path='/register' component={Register}/>

	    <Route path='/user-home' component={UserSurveyHome}/>
		<Route path='/single-page-survey' component={SinglePageSurvey}/>
		<Route path='/view-user-survey-data' component={ViewUserSurveyData}/>

	    <Route path='/admin-home' component={AdminHome}/>
	    <Route path='/admin-survey' component={DisplayAdminSurvey}/>
	    <Route path='/admin-user' component={AdminUser}/>

	    <Route path='/create-company' component={CreateCompany}/>
	    <Route path='/create-form' component={CreateForm}/>
	    <Route path='/create-question/:fid' component={CreateAdminQuestion}/>
	    <Route path='/create-option/:fid/:qid' component={CreateAdminOption}/>
	    <Route path='/create-admin-survey' component={CreateAdminSurvey}/>

	    <Route path='/company' component={DisplayCompany}/>
	    <Route path='/form' component={DisplayForm}/>
	    <Route path='/admin-question/:fid' component={DisplayAdminQuestion}/>
	    <Route path='/admin-option/:fid/:qid' component={DisplayAdminOption}/>

	    <Route path='/edit-company/:id' component={EditCompany}/>
	    <Route path='/edit-form/:fid' component={EditForm}/>
	    <Route path='/edit-question/:fid/:qid' component={EditAdminQuestion}/>
	    <Route path='/edit-option/:fid/:qid/:oid' component={EditAdminOption}/>
	    <Route path='/edit-admin-survey/:sid' component={EditAdminSurvey}/>

	    <Route path='/survey-complete' component={SurveyComplete}/>
	    <Route path='/already-complete' component={AlreadyComplete}/>

	    <Route path='/add-user-survey/:cid/:sid' component={AddUserSurvey}/>

	    <Route path='/forgotpassword' component={Forgot}/>
	    <Route path='/password/reset/:token' component={Reset}/>
	</Switch>
	</Router>,
    document.getElementById('app')
);