import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import { logOutAction, clearUserAction } from '../store'


function LogOutButton(props) {
    // For now only creating the routes for users that are not logged in
    return (
        <button
        className='logOutButton'
        onClick={props.logOut}
        >Log Out</button>
    );

}

const mapDispatch = (dispatch, ownProps) => ({
    logOut(history){
        dispatch(logOutAction()) 
        dispatch(clearUserAction())
        ownProps.history.push('/');       
    }
})

export default withRouter(connect(null, mapDispatch)(LogOutButton))