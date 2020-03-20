import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {foreignContactPressed} from "../../../../actions/symptom-survey/question5";
import {QUESTION_FIVE_BUTTON_ANSWER_TWO} from "../../../../constants/constant-list";
import styles from '../survey-button-styles'

const QuestionFiveAnswerTwoButton = ({foreignContactPressed}) => {
    return (
        <TouchableOpacity onPress={foreignContactPressed}>
            <Text style={styles.button}>{QUESTION_FIVE_BUTTON_ANSWER_TWO}</Text>
        </TouchableOpacity>
    )
};

QuestionFiveAnswerTwoButton.propTypes = {
    foreignContactPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    foreignContactPressed: () => dispatch(foreignContactPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionFiveAnswerTwoButton);