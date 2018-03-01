import React, {Component} from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { addAttempt, clearAnswersAction } from '../store'

class Questionnaires extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.resetAnswers()
    }

    render(){
        return (
            <div className="questionnaire">
                <h1>Questionnaires</h1>
                <div className="questionnaires">
    
                    {this.props.attempts.length ?
                        <ul>
                            {this.props.attempts.map(attempt => (
                                <li key={attempt.id}>
                                    <Link className="questionaireLink" to={`/questionnaire/${attempt.id}`}>
                                        Qns. | created: {attempt.created_at.slice(0,10)} 
                                    </Link>
                                </li>
                            ))}
                        </ul> : "You haven't created any questionnaires yet"}
    
                </div>
                <button
                    className='questionnaireButton'
                    onClick={() => this.props.addQuestionnaire(this.props.user_id)}
                >create a new questionnaire</button>
                <br/>
            </div>)
    }
}

const mapStateToProps = (state) => ({
    attempts: state.attempts,
    user_id: state.user.id
})

const mapDispatchToProps = (dispatch) => ({
    addQuestionnaire(user_id) {
        dispatch(addAttempt(user_id))
    },
    resetAnswers(){
        dispatch(clearAnswersAction())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Questionnaires)