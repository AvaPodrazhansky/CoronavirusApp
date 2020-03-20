import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {conjunctivitisPressed} from "../../../../actions/symptom-survey/question2";
import {QUESTION_TWO_BUTTON_ANSWER_EIGHT} from "../../../../constants/constant-list";
import styles from '../survey-button-styles'

const QuestionTwoAnswerEightButton = ({conjunctivitisPressed}) => {
    return (
        <TouchableOpacity onPress={conjunctivitisPressed}>
            <Text style={styles.button}>{QUESTION_TWO_BUTTON_ANSWER_EIGHT}</Text>
        </TouchableOpacity>
    )
};

QuestionTwoAnswerEightButton.propTypes = {
    conjunctivitisPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    conjunctivitisPressed: () => dispatch(conjunctivitisPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTwoAnswerEightButton);