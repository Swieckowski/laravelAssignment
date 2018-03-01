import React, { Component } from "react";
import { connect } from "react-redux";
import Questionnaires from './Questionnaires'
import LogOutButton from './LogOutButton'
import { loadAttempts } from '../store'


class Home extends Component {
    componentDidMount() {
        this.props.loadData(this.props.user_id)
    }

    render() {

        return (
            <div className="container">
                <div className="apart">
                    <h1>Welcome!</h1>
                    <LogOutButton />
                </div>
                <br />
                <Questionnaires />
            </div>)
    }
}
const mapStateToProps = (state) => ({
    user_id: state.user.id
})

const mapDispatchToProps = (dispatch) => ({
    loadData(user_id) {
        dispatch(loadAttempts(user_id))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);


