import React, { Component } from 'react'
import { Router } from 'react-router'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import history from './history'

import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import Questionnaire from './components/Questionnaire'

import { loadAttempts, loadQuestions } from './store'


class Routes extends Component {
    componentDidMount() {
        this.props.loadData()
    }

    render(){      
        if (!this.props.loggedIn.loggedIn) return (
            <Router history={history}>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route path='/Login' component={Login} />
                    <Route path='/Signup' component={Signup} />
                    <Redirect to='/' />
                </Switch>
            </Router>
        );
        else return (
            <Router history={history}>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path="/questionnaire/:attempt_id" component={Questionnaire} />
                    <Route path='/' component={Home} />
                </Switch>
            </Router>
        )
    }
}

const mapState = (state) => ({
    loggedIn: state.loggedIn
})

const mapDispatchToProps = (dispatch) => ({
    loadData() {
        dispatch(loadQuestions())
    }
});

export default connect(mapState, mapDispatchToProps)(Routes)