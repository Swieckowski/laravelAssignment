import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { loginUser } from '../store'

export default class UnAnswered extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: props.question.a
        };
        this.handleChange = this.handleChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    handleChange(event) {
        this.setState({
            selectedOption: event.target.value
        });
    }

    submitHandler(evt) {
        evt.preventDefault();
        this.props.handleSubmit(this.state.selectedOption);
    }

    render() {
        const handleChange = this.handleChange;
        const submitHandler = this.submitHandler;

        return (
            <div>
                {this.props.question.question}
                <form onSubmit={evt => submitHandler(evt)}>
                    <div className="radio">
                        <label>
                            <input type="radio" 
                            value={this.props.question.a} 
                            checked={this.state.selectedOption === this.props.question.a}
                            onChange={this.handleChange}
                            />
                            {this.props.question.a}
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio"
                            value={this.props.question.b} 
                            checked={this.state.selectedOption === this.props.question.b}
                            onChange={this.handleChange} 
                            />
                            {this.props.question.b}
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" 
                            value={this.props.question.c} 
                            checked={this.state.selectedOption === this.props.question.c} 
                            onChange={this.handleChange} 
                            />
                            {this.props.question.c}
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" 
                            value={this.props.question.d} 
                            checked={this.state.selectedOption === this.props.question.d} 
                            onChange={this.handleChange} 
                            />
                            {this.props.question.d}
                        </label>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
