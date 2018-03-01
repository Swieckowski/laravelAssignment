import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { loginUser } from '../store'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    handleChange(event) {
        const value = event.target.value
        const inputElement = event.target.name
        this.setState({ [inputElement]: value })
    }

    submitHandler(evt) {
        evt.preventDefault();
        this.props.handleSubmit(this.state);
    }

    render() {
        const handleChange = this.handleChange;
        const submitHandler = this.submitHandler;

        return (
            <div className="container">
                <h1>AbleTo Questionnaire Assignment</h1>
                <div className="credentials">
                    <br/>
                    <form onSubmit={evt => submitHandler(evt)}>
                        <input className="textInput" type='text'required
                            name="email"
                            placeholder="email"
                            value={this.state.email}
                            onChange={(event) => { handleChange(event) }}
                        />
                        <input className="passwordInput" type='password' required
                            name="password"
                            placeholder="password"
                            value={this.state.password}
                            onChange={(event) => { handleChange(event) }}
                        />
                        <button type="submit">login</button>
                    </form>
                    {this.props.loginFail ? <div className="Warning">Sorry, but you entered an invalid username or password.</div>  : null}
                    <Link to="/Signup">Signup for our service</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    loginFail: state.user.loginFail
})

const mapDispatchToProps = (dispatch) => ({
    handleSubmit(state) {
        dispatch(loginUser({ email: state.email, password: state.password }))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);