import React from 'react'
import ReactDOM from 'react-dom'
import {  BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Index from './components/index'
import Login from './components/login'
import Register from './components/register'
import Home from './components/home'
import Forgot from './components/forgot'
import Reset from './components/reset'
import DisplaySurvey from './components/DisplaySurvey'
import AdminHome from './components/AdminHome'
import Company from './components/Company'
import DisplayCompany from './components/DisplayCompany'
import EditCompany from './components/EditCompany'


ReactDOM.render(
	<Router>
	    <Switch>
	    <Route exact path='/' component={Index}/>
	    <Route path='/login' component={Login}/>
	    <Route path='/register' component={Register}/>
	    <Route path='/user-home' component={DisplaySurvey}/>
	    <Route path='/admin-home' component={AdminHome}/>
	    <Route path='/create-company' component={Company}/>
	    <Route path='/company' component={DisplayCompany}/>
	    <Route path='/edit-company/:id' component={EditCompany}/>
	    <Route path='/forgotpassword' component={Forgot}/>
	    <Route path='/password/reset/:token' component={Reset}/>
	</Switch>
	</Router>,
    document.getElementById('app')
);