import React from 'react'
import { connect } from "react-redux";
import { loadHistory } from '../store'


function Answered(props) {
    console.log(props)
    return (
        <div className="answered">
            <div className="question">{props.question.question}</div>
            <br />
            {props.answer.answer}
            <button
                className='history button'
                onClick={()=>props.loadHistory(props.question.question,props.answer.answer,props.question.id,props.user_id)}
            >View Answer History</button>
        </div>
    );

}

const mapStateToProps = (state) => ({
    user_id: state.user.id,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    loadHistory(question, answer, question_id, user_id){
        dispatch(loadHistory(question,answer,question_id,user_id))
        // ownProps.history.push("/answerHistory")
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Answered);