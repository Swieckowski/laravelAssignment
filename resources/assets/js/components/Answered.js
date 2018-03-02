import React from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { loadHistory } from '../store'


function Answered(props) {
    return (
        <div className="answered">
            <div className="question">{props.question.question}</div>
            <br />
            {props.answer.answer}
            <Link to="/answerHistory">
                <button
                    className='history button'
                    onClick={() => props.loadHistory(props.question.question, props.answer.answer, props.user_id, props.question.id)}
                >View Answer History</button>
            </Link>
        </div>
    );

}

const mapStateToProps = (state) => ({
    user_id: state.user.id,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    loadHistory(question, answer, question_id, user_id) {
        dispatch(loadHistory(question, answer, question_id, user_id))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Answered);