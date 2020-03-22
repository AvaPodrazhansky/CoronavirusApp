import React from "react";
import {connect} from "react-redux";
import CheckBox from './index';
import {View, Text} from 'react-native';
import {questionFiveAnswerArray, QUESTION_FIVE} from "../../../constants/constant-list";
import PropTypes, {bool} from 'prop-types';
import {toggleQuestionFiveAnswer} from "../../../actions/symptom-survey/question5";
import {getQuestionFiveAnswerStatuses} from "../../../selectors/symptom-survey/question5";
import styles from './checkbox-styles'

const QuestionFiveCheckbox = ({answerStatuses, toggleAnswer}) => {
    // 2 Arrays:
    // questionFiveAnswerArray: array of strings for the answers (text values)
    // answerStatuses: array indicating if answer is checked or not (reducer array)
    // The indices of these arrays go together
    return (
        <View>
            <Text style={styles.questionText}>{QUESTION_FIVE}</Text>
            {
                questionFiveAnswerArray.map((answer, index) => (
                    <CheckBox
                        key={index}
                        isChecked={answerStatuses[index]}
                        toggleCheck={() => toggleAnswer(index)}
                        title={answer}/>
                ))
            }
        </View>
    )
};

QuestionFiveCheckbox.propTypes = {
    toggleAnswer: PropTypes.func.isRequired,
    answerStatuses: PropTypes.arrayOf(bool).isRequired
};

const mapStateToProps = state => ({
    answerStatuses: getQuestionFiveAnswerStatuses(state)
});

const mapDispatchToProps = dispatch => ({
    toggleAnswer: index => dispatch(toggleQuestionFiveAnswer(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionFiveCheckbox);
