import React from 'react'

export default function Answered(props) {
    return (
        <div className="answeredQuestion">
            Question: {props.question.question}
            <br/>
            Answer: {props.answer.answer}
        </div>
    );

}