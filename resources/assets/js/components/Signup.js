import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import { addUser } from '../store'

export default class Signup extends Component {
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
        this.setState({ [inputElement]: value })
    }

    submitHandler(evt) {
        evt.preventDefault();
        this.props.handleSubmit(this.state);
        this.setState({email:"",password:"",repeatPassword:""});
    }

    render() {
        const handleChange = this.handleChange;
        const submitHandler = this.submitHandler;

        return (
            <div className="credentials">
                <input className="textInput" type='text'
                    name="email"
                    placeholder="email"
                    value={this.state.email}
                    onChange={(event) => { handleChange(event) }}
                />
                <input className="textInput" type='text'
                    name="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={(event) => { handleChange(event) }}
                />
                <input className="textInput" type='text'
                    name="repeatPassword"
                    placeholder="confirm password"
                    value={this.state.repeatPassword}
                    onChange={(event) => { handleChange(event) }}
                />
                <button type="submit">Submit</button>
                <Link to="/Login">Login</Link>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    handleSubmit(state) {
        dispatch(addUser({email: state.email, password: state.password}))
    }
});

// export default connect(null, mapDispatchToProps)(Signup);