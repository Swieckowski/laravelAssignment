import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import { addUser } from '../store'

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            repeatPassword: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    handleChange(event) {
        const value = event.target.value
        const inputElement = event.target.name
        this.setState({ [inputElement]: value, failed: false })
    }

    submitHandler(evt) {
        evt.preventDefault();
        this.props.handleSubmit(this.state);
        this.setState({ email: "", password: "", repeatPassword: "" });
    }

    render() {
        const handleChange = this.handleChange;
        const submitHandler = this.submitHandler;
        return (
            <div className="container">
                <h1>AbleTo Questionnaire Assignment</h1>
                <div className="credentials2">
                    <br/>
                    <form onSubmit={evt => submitHandler(evt)}>
                        <input className="textInput" type='text'required
                            name="email"
                            placeholder="email"
                            value={this.state.email}
                            onChange={(event) => { handleChange(event) }}
                        />
                        <input className="passwordInput" type='password'required
                            name="password"
                            placeholder="password"
                            value={this.state.password}
                            onChange={(event) => { handleChange(event) }}
                        />
                        <input className="passwordInput" type='password' required
                            name="repeatPassword"
                            placeholder="confirm password"
                            value={this.state.repeatPassword}
                            onChange={(event) => { handleChange(event) }}
                        />
                        <button disabled={this.state.password!==this.state.repeatPassword} type="submit">Signup</button>
                        {this.state.password!==this.state.repeatPassword? 
                        <div className="Warning">Passwords must match</div>: null }
                    </form>
                    {this.props.signupFail ? 
                        <div className="Warning">Something about your sign up request went wrong, perhaps you already have an account.</div> : null}
                    <Link to="/Login">Already have an account? Log in.</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    signupFail: state.user.signupFail
})

const mapDispatchToProps = (dispatch) => ({
    handleSubmit(state) {
        dispatch(addUser({ email: state.email, password: state.password }))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);