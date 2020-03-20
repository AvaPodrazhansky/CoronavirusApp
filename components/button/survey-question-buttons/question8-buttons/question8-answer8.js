import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {lungDiseasePressed} from "../../../../actions/symptom-survey/question8";
import {QUESTION_EIGHT_BUTTON_ANSWER_EIGHT} from "../../../../constants/constant-list";
import styles from '../survey-button-styles'

const QuestionEightAnswerEightButton = ({lungDiseasePressed}) => {
    return (
        <TouchableOpacity onPress={lungDiseasePressed}>
            <Text style={styles.button}>{QUESTION_EIGHT_BUTTON_ANSWER_EIGHT}</Text>
        </TouchableOpacity>
    )
};

QuestionEightAnswerEightButton.propTypes = {
    lungDiseasePressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    lungDiseasePressed: () => dispatch(lungDiseasePressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionEightAnswerEightButton);