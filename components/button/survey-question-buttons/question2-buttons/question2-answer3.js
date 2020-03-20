import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {symptomChillsPressed} from "../../../../actions/symptom-survey/question2";
import {QUESTION_TWO_BUTTON_ANSWER_THREE} from "../../../../constants/constant-list";
import styles from '../survey-button-styles'

const QuestionTwoAnswerThreeButton = ({symptomChillsPressed}) => {
    return (
        <TouchableOpacity onPress={symptomChillsPressed}>
            <Text style={styles.button}>{QUESTION_TWO_BUTTON_ANSWER_THREE}</Text>
        </TouchableOpacity>
    )
};

QuestionTwoAnswerThreeButton.propTypes = {
    symptomChillsPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    symptomChillsPressed: () => dispatch(symptomChillsPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTwoAnswerThreeButton);