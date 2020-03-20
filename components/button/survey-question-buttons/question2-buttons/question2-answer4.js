import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {soreThroatPressed} from "../../../../actions/symptom-survey/question2";
import {QUESTION_TWO_BUTTON_ANSWER_FOUR} from "../../../../constants/constant-list";
import styles from '../survey-button-styles'

const QuestionTwoAnswerFourButton = ({soreThroatPressed}) => {
    return (
        <TouchableOpacity onPress={soreThroatPressed}>
            <Text style={styles.button}>{QUESTION_TWO_BUTTON_ANSWER_FOUR}</Text>
        </TouchableOpacity>
    )
};

QuestionTwoAnswerFourButton.propTypes = {
    soreThroatPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    soreThroatPressed: () => dispatch(soreThroatPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTwoAnswerFourButton);