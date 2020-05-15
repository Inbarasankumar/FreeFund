import React, { Component } from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';

import * as path from '../router/urlMapping';
import HomePage from '../components/pages/HomePage';
import BrowseProject from "../components/pages/BrowseProject";
import Login from "../components/pages/LoginPage";
class AppRouter extends Component{

    render(){
        return(
            <Switch>
                <Redirect exact from="/" to="/home"></Redirect>
                <Route exact path={path.HOME}component={HomePage}></Route>
                <Route exact path={path.BROWSE_PROJECTS}component={Login}></Route>
                <Route exact path={path.MY_PROJECT} component={HomePage}></Route>
                <Route exact path={path.LOGIN_PAGE} component={Login}></Route>
            </Switch>
        )
    }
}

export default AppRouter;
