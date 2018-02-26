import React from 'react'
import { Router } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import history from './history'

import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'

function Routes(props) {
    // For now only creating the routes for users that are not logged in
    if (!props.loggedIn.loggedIn) return (
        <Router history={history}>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route path='/Login' component={Login} />
                <Route path='/Signup' component={Signup} />
                <Route path='/' component={Login} />
            </Switch>
        </Router>
    );
    else return (
       <Home />
    )
}

const mapState = (state) => ({
    loggedIn: state.loggedIn
})

export default connect(mapState)(Routes)