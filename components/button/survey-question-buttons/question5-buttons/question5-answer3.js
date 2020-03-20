import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {firstQuestionSymptomsPressed} from "../../../../actions/symptom-survey/question5";
import {QUESTION_FIVE_BUTTON_ANSWER_THREE} from "../../../../constants/constant-list";
import styles from '../survey-button-styles'

const QuestionFiveAnswerThreeButton = ({firstQuestionSymptomsPressed}) => {
    return (
        <TouchableOpacity onPress={firstQuestionSymptomsPressed}>
            <Text style={styles.button}>{QUESTION_FIVE_BUTTON_ANSWER_THREE}</Text>
        </TouchableOpacity>
    )
};

QuestionFiveAnswerThreeButton.propTypes = {
    firstQuestionSymptomsPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    firstQuestionSymptomsPressed: () => dispatch(firstQuestionSymptomsPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionFiveAnswerThreeButton);