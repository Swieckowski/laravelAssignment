/**
 * ACTION TYPES
 */
const LOG_IN = 'LOG_IN'
const LOG_OUT = 'LOG_OUT'

/**
 * ACTION CREATORS
 */
export const logInAction = payload => ({type: LOG_IN})
export const LogOutAction = payload => ({type: LOG_OUT})

/**
 * THUNKS
 */
// Once there's an actual back end to support this, I'll need some thunks this to it

/**
 * REDUCER
 */
export default function (state = { loggedIn: false }, action) {
    switch (action.type) {
        case LOG_IN:
            return Object.assign({}, state, {loggedIn: true})
        case LOG_OUT:
            return Object.assign({}, state, {loggedIn: true})
        default:
            return state
    }
}