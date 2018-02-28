import React from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { addAttempt } from '../store'

function Questionnaires(props) {

    return (
        <div>
            <h1>Questionnaires</h1>
            <div className="questionnaires">

                {props.attempts.length ?
                    <ul>
                        {props.attempts.map(attempt => (
                            <li key={attempt.id}>
                                <Link className="questionaireLink" to={`/questionnaire/${attempt.id}`}>
                                    questionnaire
                                </Link>
                            </li>
                        ))}
                    </ul> : "You haven't created any questionnaires yet"}

            </div>
            <button
                className='questionnaireButton'
                onClick={() => props.addQuestionnaire(props.user_id)}
            >create a new questionnaire</button>
        </div>)
}

const mapStateToProps = (state) => ({
    attempts: state.attempts,
    user_id: state.user.id
})

const mapDispatchToProps = (dispatch) => ({
    addQuestionnaire(user_id) {
        dispatch(addAttempt(user_id))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Questionnaires)