import React from 'react'

export default function Answered(props) {
    return (
        <div className="answered">
            <div className="question">{props.question.question}</div>
            <br/>
            {props.answer.answer}
        </div>
    );

}