import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';

import Login from '../pages/Login/index';
import Dashboard from '../pages/Dashboard/index';
import Wiki from '../pages/Wiki/index';

export default function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <PrivateRoute exact path="/" component={Dashboard} />
                <PrivateRoute path="/wiki" component={Wiki} />
            </Switch>
        </BrowserRouter>
    );
}
