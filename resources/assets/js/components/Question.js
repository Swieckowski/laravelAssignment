import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { addAnswer, changeAnswer } from '../store'
import UnAnswered from './UnAnswered'
import Answered from './Answered'

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false
        };
        this.toggleEditMode = this.toggleEditMode.bind(this);
    }

    toggleEditMode() {
        this.setState({ editMode: !this.state.editMode })
    }

    render() {
        const props = Object.assign({}, this.props)
        if (this.state.editMode && this.props.answered) {
            props.handleSubmit = this.props.putAnswer
            props.toggleEdit = this.toggleEditMode
            props.edit = true
            return (
                <div className="toggleAnswer">
                    <UnAnswered {...props} />
                    <button onClick={this.toggleEditMode}>
                        toggle edit
                    </button>
                </div>
            )
        } else if (this.props.answered) {
            return (
                <div className="toggleAnswer">
                    <Answered {...props} />
                    <button onClick={this.toggleEditMode}>
                        toggle edit
                     </button>
                </div>
            )
        }
        else {
            props.handleSubmit = this.props.postAnswer
            return <UnAnswered {...props} />
        }
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    postAnswer(answer) {
        dispatch(addAnswer(ownProps.user_id, ownProps.attempt_id, ownProps.question.id, answer))
    },
    putAnswer(answer_id, answer) {
        dispatch(changeAnswer(answer_id, answer, ownProps.attempt_id))
    }
});

export default connect(null, mapDispatchToProps)(Question);
