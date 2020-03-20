import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {notListedAbovePressed} from "../../../../actions/symptom-survey/question2";
import {QUESTION_TWO_BUTTON_ANSWER_TWELVE} from "../../../../constants/constant-list";
import styles from '../survey-button-styles'

const QuestionTwoAnswerTwelveButton = ({notListedAbovePressed}) => {
    return (
        <TouchableOpacity onPress={notListedAbovePressed}>
            <Text style={styles.button}>{QUESTION_TWO_BUTTON_ANSWER_TWELVE}</Text>
        </TouchableOpacity>
    )
};

QuestionTwoAnswerTwelveButton.propTypes = {
    notListedAbovePressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    notListedAbovePressed: () => dispatch(notListedAbovePressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTwoAnswerTwelveButton);