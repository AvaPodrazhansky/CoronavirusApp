import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {highBloodPressurePressed} from "../../../../actions/symptom-survey/question8";
import {QUESTION_EIGHT_BUTTON_ANSWER_ONE} from "../../../../constants/constant-list";
import styles from '../survey-button-styles'

const QuestionEightAnswerOneButton = ({highBloodPressurePressed}) => {
    return (
        <TouchableOpacity onPress={highBloodPressurePressed}>
            <Text style={styles.button}>{QUESTION_EIGHT_BUTTON_ANSWER_ONE}</Text>
        </TouchableOpacity>
    )
};

QuestionEightAnswerOneButton.propTypes = {
    highBloodPressurePressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    highBloodPressurePressed: () => dispatch(highBloodPressurePressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionEightAnswerOneButton);