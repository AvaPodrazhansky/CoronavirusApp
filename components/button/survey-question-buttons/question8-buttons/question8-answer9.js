import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {cerebrovascularDiseasePressed} from "../../../../actions/symptom-survey/question8";
import {QUESTION_EIGHT_BUTTON_ANSWER_NINE} from "../../../../constants/constant-list";
import styles from '../survey-button-styles'

const QuestionEightAnswerNineButton = ({cerebrovascularDiseasePressed}) => {
    return (
        <TouchableOpacity onPress={cerebrovascularDiseasePressed}>
            <Text style={styles.button}>{QUESTION_EIGHT_BUTTON_ANSWER_NINE}</Text>
        </TouchableOpacity>
    )
};

QuestionEightAnswerNineButton.propTypes = {
    cerebrovascularDiseasePressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    cerebrovascularDiseasePressed: () => dispatch(cerebrovascularDiseasePressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionEightAnswerNineButton);