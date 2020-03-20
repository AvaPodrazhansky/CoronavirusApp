import React from "react";
import {connect} from "react-redux";
import CheckBox from './index';
import {toggleQuestionTwoAnswer} from '../../../actions/symptom-survey/question2';
import {getQuestionTwoAnswerStatuses} from "../../../selectors/symptom-survey/question2";
import {View, Text} from 'react-native';
import {question2AnswerArray, QUESTION_TWO} from "../../../constants/constant-list";
import PropTypes, {bool} from 'prop-types';

const QuestionTwo = ({answerStatuses, toggleAnswer}) => {
    // 2 Arrays:
    // question2AsnswerArray: array of strings for the answers (text values
    // answerStatuses: array indicating if answer is checked or not (reducer array)
    // The indices of these arrays go together
    return (
        <View>
            <Text>{QUESTION_TWO}</Text>
            {
                question2AnswerArray.map((answer, index) => (
                    <CheckBox isChecked={answerStatuses[index]}
                              toggleCheck={() => toggleAnswer(index)}
                              title={answer}/>
                ))
            }
        </View>
    )
};

QuestionTwo.propTypes = {
    toggleAnswer: PropTypes.func.isRequired,
    answerStatuses: PropTypes.arrayOf(bool).isRequired
};

const mapStateToProps = state => ({
    answerStatuses: getQuestionTwoAnswerStatuses(state)
});

const mapDispatchToProps = dispatch => ({
    toggleAnswer: index => dispatch(toggleQuestionTwoAnswer(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTwo);