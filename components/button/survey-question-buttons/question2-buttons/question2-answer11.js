import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {decreasedSweatingPressed} from "../../../../actions/symptom-survey/question2";
import {QUESTION_TWO_BUTTON_ANSWER_ELEVEN} from "../../../../constants/constant-list";
import styles from '../survey-button-styles'

const QuestionTwoAnswerElevenButton = ({decreasedSweatingPressed}) => {
    return (
        <TouchableOpacity onPress={decreasedSweatingPressed}>
            <Text style={styles.button}>{QUESTION_TWO_BUTTON_ANSWER_ELEVEN}</Text>
        </TouchableOpacity>
    )
};

QuestionTwoAnswerElevenButton.propTypes = {
    decreasedSweatingPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    decreasedSweatingPressed: () => dispatch(decreasedSweatingPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTwoAnswerElevenButton);