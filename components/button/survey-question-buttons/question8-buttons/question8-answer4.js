import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {chronicKidneyDiseasePressed} from "../../../../actions/symptom-survey/question8";
import {QUESTION_EIGHT_BUTTON_ANSWER_FOUR} from "../../../../constants/constant-list";
import styles from '../survey-button-styles'

const QuestionEightAnswerFourButton = ({chronicKidneyDiseasePressed}) => {
    return (
        <TouchableOpacity onPress={chronicKidneyDiseasePressed}>
            <Text style={styles.button}>{QUESTION_EIGHT_BUTTON_ANSWER_FOUR}</Text>
        </TouchableOpacity>
    )
};

QuestionEightAnswerFourButton.propTypes = {
    chronicKidneyDiseasePressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    chronicKidneyDiseasePressed: () => dispatch(chronicKidneyDiseasePressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionEightAnswerFourButton);