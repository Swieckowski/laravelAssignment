import React from 'react'
import { Router } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import history from './history'

import Login from './components/Login'
import Signup from './components/Signup'

export default function Routes() {
    // For now only creating the routes for users that are not logged in
    return (
        <Router history={history}>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route path='/Login' component={Login} />
                <Route path='/Signup' component={Signup} />
                <Route path='/' component={Login} />
            </Switch>
        </Router>
    )
}