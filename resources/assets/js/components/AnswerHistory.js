import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { addAttempt, clearAnswersAction } from '../store'

class AnswerHistory extends Component {

    render() {
        return (
            <div className="questionnaire">
                <h1>Answer History</h1>

                <div className="question">{this.props.answerHistor.question}</div>
                <br />
                {this.props.answerHistory.answer}
                <br />
                You responded to the question this way in the following questionnaires:
                <div className="questionnaires">

                    {this.props.answerHistory.attempts.length ?
                        <ul>
                            {this.props.answerHistory.attempts.map(attempt => {
                                const found = this.props.attempts.find(generalAttempt => generalAttempt.id === attempt)
                                return (
                                    <li key={attempt.id}>
                                        <Link className="questionaireLink" to={`/questionnaire/${found.id}`}>
                                            Qns. | created: {found.created_at.slice(0, 10)}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul> : "You did not choose an answer to view the history of."}

                </div>
            </div>)
    }
}

const mapStateToProps = (state) => ({
    answerHistory: state.answerHistory,
    attempts: state.attempts
})

export default connect(mapStateToProps)(AnswerHistory)