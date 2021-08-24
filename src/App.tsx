import * as React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import LoginContainer from "./pages/Login/login.container";
import DashboardContainer from "./pages/Dashboard/dashboard.container";
import AboutUsContainer from "./pages/AboutUs/aboutus.container";

import './assets/scss/main.scss';

export const App = () => {
    return (
        <div>
            <HashRouter>
                <Switch>
                    <Route exact={true} path="/" component={DashboardContainer} />
                    <Route path="/login" component={LoginContainer} />
                    <Route path="/about-us" component={AboutUsContainer} />
                </Switch>
            </HashRouter>   
        </div>
    )
}