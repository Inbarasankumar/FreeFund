import React, { Component } from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';

import * as path from '../router/urlMapping';
import HomePage from '../components/pages/HomePage';
import Overview from '../components/Overview';
class AppRouter extends Component{

    render(){
        return(
            <Switch>
                <Redirect exact from="/" to="/home"></Redirect>
                <Route exact path={path.HOME}component={HomePage}></Route>
                <Route exact path={path.BROWSE_PROJECTS}component={HomePage}></Route>
                <Route exact path={path.MY_PROJECT} component={HomePage}></Route>
                {/* /will be removed later/ */}
                <Route exact path ="/overview" component={Overview}></Route> 
            </Switch>
        )
    }
}

export default AppRouter;