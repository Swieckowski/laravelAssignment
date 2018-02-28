import React, { Component } from "react";
// import { withRouter, Link} from 'react-router-dom';
import { connect } from "react-redux";
import Question from './Question'


class Questionnaire extends Component {
    constructor(props) {
        super(props);
    }
    // componentDidMount() {
    //     this.props.loadAnswers(Number(this.props.match.attempt_id))
    // }

    render() {
        console.log(this.props)
        console.log("this.props.match.attempt_id", this.props.match.params.attempt_id)
        const attempt_id = Number(this.props.match.params.attempt_id)
        return (
            <div className="questionList">
                {this.props.questions.map(question=>{
                    const props = {question, attempt_id, answered: false, user_id: this.props.user_id }
                    return <div key={question.id}><Question {...props} /></div>
                })}
            </div>)
    }
}


//Using withRouter in conjunction with ownProps to map only the necessary student to props
const mapStateToProps = (state) => ({
//   student: state.studentsObj.students.find((student)=> student.id === parseInt(ownProps.match.params.studentId))
    questions: state.questions,
    user_id: state.user.id
});

// //handleOnClick deletes a student then redirects to the students page
// const mapDispatchToProps = (dispatch, ownProps) => ({
//   handleOnClick (id){ 
//     dispatch(deleteStudentAndUpdate(id, ownProps.history));
//   }
// });

export default connect(mapStateToProps)(Questionnaire);