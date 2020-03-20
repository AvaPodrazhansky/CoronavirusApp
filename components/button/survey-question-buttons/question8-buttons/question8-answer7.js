import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {liverCirrhosisPressed} from "../../../../actions/symptom-survey/question8";
import {QUESTION_EIGHT_BUTTON_ANSWER_SEVEN} from "../../../../constants/constant-list";
import styles from '../survey-button-styles'

const QuestionEightAnswerSevenButton = ({liverCirrhosisPressed}) => {
    return (
        <TouchableOpacity onPress={liverCirrhosisPressed}>
            <Text style={styles.button}>{QUESTION_EIGHT_BUTTON_ANSWER_SEVEN}</Text>
        </TouchableOpacity>
    )
};

QuestionEightAnswerSevenButton.propTypes = {
    liverCirrhosisPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    liverCirrhosisPressed: () => dispatch(liverCirrhosisPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionEightAnswerSevenButton);