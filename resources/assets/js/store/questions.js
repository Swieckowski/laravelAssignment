import axios from "axios"

const initialState = []
/**
 * ACTION TYPES
 */
const GOT_QUESTIONS = 'GOT_QUESTIONS'
const CLEAR_QUESTIONS = 'CLEAR_QUESTIONS'

/**
 * ACTION CREATORS
 */
const questionsLoadAction = (data) => {
	return {
		type: GOT_QUESTIONS,
		payload: data
	}
}

export const clearQuestionsAction = payload => ({type: CLEAR_QUESTIONS})

/**
 * THUNKS
 */
export const loadQuestions = () => dispatch => {
	axios.get('/questions')
	.then(response => response.data)
	.then(data => dispatch(questionsLoadAction(data)))
	.catch(error=>console.log(error));
}


/**
 * REDUCER
 */
export default function (state = initialState, action) {
    switch (action.type) {
        case GOT_QUESTIONS:
            return action.payload
        case CLEAR_QUESTIONS:
            return state
        default:
            return state
    }
}