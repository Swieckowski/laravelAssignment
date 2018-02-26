import React from 'react'
import {connect} from 'react-redux'
import {logOutAction} from '../store'


function LogOutButton(props) {
    // For now only creating the routes for users that are not logged in
    return (
        <button
        className='logOutButton'
        onClick={props.logOut}
        >Log Out</button>
    );

}

const mapDispatch = (dispatch) => ({
    logOut(){
        console.log("dispatching")
        dispatch(logOutAction())
        
    }
})

export default connect(null, mapDispatch)(LogOutButton)