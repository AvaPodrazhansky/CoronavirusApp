import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {presenceConfirmedCOVIDPressed} from "../../../../actions/symptom-survey/question5";
import {QUESTION_FIVE_BUTTON_ANSWER_FIVE} from "../../../../constants/constant-list";
import styles from '../survey-button-styles'

const QuestionFiveAnswerFiveButton = ({presenceConfirmedCOVIDPressed}) => {
    return (
        <TouchableOpacity onPress={presenceConfirmedCOVIDPressed}>
            <Text style={styles.button}>{QUESTION_FIVE_BUTTON_ANSWER_FIVE}</Text>
        </TouchableOpacity>
    )
};

QuestionFiveAnswerFiveButton.propTypes = {
    presenceConfirmedCOVIDPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    presenceConfirmedCOVIDPressed: () => dispatch(presenceConfirmedCOVIDPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionFiveAnswerFiveButton);