import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {persistentHeadachePressed} from "../../../../actions/symptom-survey/question2";
import {QUESTION_TWO_BUTTON_ANSWER_TEN} from "../../../../constants/constant-list";
import styles from '../survey-button-styles'

const QuestionTwoAnswerTenButton = ({persistentHeadachePressed}) => {
    return (
        <TouchableOpacity onPress={persistentHeadachePressed}>
            <Text style={styles.button}>{QUESTION_TWO_BUTTON_ANSWER_TEN}</Text>
        </TouchableOpacity>
    )
};

QuestionTwoAnswerTenButton.propTypes = {
    persistentHeadachePressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    persistentHeadachePressed: () => dispatch(persistentHeadachePressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTwoAnswerTenButton);