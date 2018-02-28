import React, { Component } from "react";
import { connect } from "react-redux";
import Questionnaires from './Questionnaires'
import LogOutButton from './LogOutButton'
import { loadAttempts } from '../store'


class Home extends Component {
    componentDidMount() {
        this.props.loadQuestionnaire(this.props.user_id)
    }

    render() {

        return (
            <div>
                Hey! It looks like you're logged in!
                <LogOutButton />
                <br />
                <Questionnaires />
            </div>)
    }
}
const mapStateToProps = (state) => ({
    user_id: state.user.id
})

const mapDispatchToProps = (dispatch) => ({
    loadQuestionnaire(user_id) {
        dispatch(loadAttempts(user_id))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);


