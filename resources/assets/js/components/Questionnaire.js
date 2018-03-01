import React, { Component } from "react";
import { connect } from "react-redux";
import Question from './Question'
import { loadAnswers } from '../store'
import LogOutButton from './LogOutButton'
import { Link } from 'react-router-dom'

class Questionnaire extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.loadAnswers(Number(this.props.match.params.attempt_id))
    }

    render() {
        const attempt_id = Number(this.props.match.params.attempt_id)
        const unAnsweredQuestions = this.props.questions.filter(question => {
            if (this.props.answers.find(answer => answer.question_id === question.id)) return false;
            else return true;
        })
        console.log("123")
        return (
            <div className="container">
                <div className="apart">
                    <Link to="/">Back to list </Link>
                    <LogOutButton />
                </div>

                {this.props.answers.length ? <h1>Answered Questions</h1> : null}
                <div className="answerList">
                    {this.props.answers.map(answer => {
                        const question = this.props.questions.find(question => question.id === answer.question_id)
                        const props = { question, attempt_id, answered: true, user_id: this.props.user_id, answer }
                        return <div key={answer.id}><Question {...props} /></div>
                    })}
                </div>
                {unAnsweredQuestions.length ? <h1>Unanswered Questions</h1> : null}
                <div className="questionList">
                    {unAnsweredQuestions.map(question => {
                        const props = { question, attempt_id, answered: false, user_id: this.props.user_id }
                        return <div key={question.id}><Question {...props} /></div>
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    questions: state.questions,
    answers: state.answers,
    user_id: state.user.id,

});

const mapDispatchToProps = (dispatch) => ({
    loadAnswers(attempt_id) {
        dispatch(loadAnswers(attempt_id))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Questionnaire);