import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {hormoneMedicationPressed} from "../../../../actions/symptom-survey/question8";
import {QUESTION_EIGHT_BUTTON_ANSWER_FIVE} from "../../../../constants/constant-list";
import styles from '../survey-button-styles'

const QuestionEightAnswerFiveButton = ({hormoneMedicationPressed}) => {
    return (
        <TouchableOpacity onPress={hormoneMedicationPressed}>
            <Text style={styles.button}>{QUESTION_EIGHT_BUTTON_ANSWER_FIVE}</Text>
        </TouchableOpacity>
    )
};

QuestionEightAnswerFiveButton.propTypes = {
    hormoneMedicationPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    hormoneMedicationPressed: () => dispatch(hormoneMedicationPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionEightAnswerFiveButton);