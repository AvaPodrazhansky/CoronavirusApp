import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {coronaryHeartDiseasePressed} from "../../../../actions/symptom-survey/question8";
import {QUESTION_EIGHT_BUTTON_ANSWER_TWO} from "../../../../constants/constant-list";
import styles from '../survey-button-styles'

const QuestionEightAnswerTwoButton = ({coronaryHeartDiseasePressed}) => {
    return (
        <TouchableOpacity onPress={coronaryHeartDiseasePressed}>
            <Text style={styles.button}>{QUESTION_EIGHT_BUTTON_ANSWER_TWO}</Text>
        </TouchableOpacity>
    )
};

QuestionEightAnswerTwoButton.propTypes = {
    coronaryHeartDiseasePressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    coronaryHeartDiseasePressed: () => dispatch(coronaryHeartDiseasePressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionEightAnswerTwoButton);