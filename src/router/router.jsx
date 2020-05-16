import React, { Component } from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';

import * as path from '../router/urlMapping';
import HomePage from '../components/pages/HomePage';
import Overview from '../components/Overview';
import BrowseProject from "../components/pages/BrowseProject";
import Funding from '../components/FundingGoals';
import Perks from '../components/Perks';
import Recruiting from '../components/Recruiting';
import Promotions from '../components/Promotions';
import ProjectDetails from '../components/pages/ProjectDetails';

class AppRouter extends Component{
    componentDidUpdate(nextProps) {
        if (this.props.location.pathname !== nextProps.location.pathname) {
          window.scrollTo(0, 0);
        }
      }
    render(){
        return(
            <Switch>
                <Redirect exact from="/" to="/home"></Redirect>
                <Route exact path={path.HOME}component={HomePage}></Route>
                <Route exact path={path.BROWSE_PROJECTS}component={BrowseProject}></Route>
                <Route exact path={path.MY_PROJECT} component={HomePage}></Route>
                {/* /will be removed later/ */}
                <Route exact path ="/overview" component={Overview}></Route> 
                <Route exact path= "/funding" component={Funding}></Route>
                <Route exact path ="/perks" component={Perks}></Route> 
                <Route exact path= "/recruiting" component={Recruiting}></Route>
                <Route exact path ="/promotions" component={Promotions}></Route> 
                <Route exact path={path.PROJECT_DETAILS} component={ProjectDetails}></Route>
            </Switch>
        )
    }
}

export default AppRouter;