import React from "react";
import {connect} from "react-redux";
import CheckBox from './index';
import {View, Text} from 'react-native';
import {questionEightAnswerArray, QUESTION_EIGHT} from "../../../constants/constant-list";
import PropTypes, {bool} from 'prop-types';
import {toggleQuestionEightAnswer} from "../../../actions/symptom-survey/question8";
import {getQuestionEightAnswerStatuses} from "../../../selectors/symptom-survey/question8";

const QuestionEightCheckbox = ({answerStatuses, toggleAnswer}) => {
    // 2 Arrays:
    // questionEightAnswerArray: array of strings for the answers (text values)
    // answerStatuses: array indicating if answer is checked or not (reducer array)
    // The indices of these arrays go together
    return (
        <View>
            <Text>{QUESTION_EIGHT}</Text>
            {
                questionEightAnswerArray.map((answer, index) => (
                    <CheckBox isChecked={answerStatuses[index]}
                              toggleCheck={() => toggleAnswer(index)}
                              title={answer}/>
                ))
            }
        </View>
    )
};

QuestionEightCheckbox.propTypes = {
    toggleAnswer: PropTypes.func.isRequired,
    answerStatuses: PropTypes.arrayOf(bool).isRequired
};

const mapStateToProps = state => ({
    answerStatuses: getQuestionEightAnswerStatuses(state)
});

const mapDispatchToProps = dispatch => ({
    toggleAnswer: index => dispatch(toggleQuestionEightAnswer(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionEightCheckbox);