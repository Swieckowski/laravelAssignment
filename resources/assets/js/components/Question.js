import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { addAnswer } from '../store'
import UnAnswered from './UnAnswered'

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false
        };
    }

    setToEditMode(event) {
        this.setState({ editMode: true })
    }

    render() {
        const props = Object.assign({}, this.props)
        if (this.state.editMode && this.props.answered) {
            return <UnAnswered />
        } 
        // else if(this.props.answered){
        //     return <Answered  />
        // } 
        else {
            props.handleSubmit = this.props.postAnswer
            return <UnAnswered {...props} />
        }
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    postAnswer(answer) {
        dispatch(addAnswer(ownProps.user_id, ownProps.attempt_id, ownProps.question.id, answer))
    }
});

export default connect(null, mapDispatchToProps)(Question);
