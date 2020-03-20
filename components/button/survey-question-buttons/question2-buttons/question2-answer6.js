import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {shortnessOfBreathPressed} from "../../../../actions/symptom-survey/question2";
import {QUESTION_TWO_BUTTON_ANSWER_SIX} from "../../../../constants/constant-list";
import styles from '../survey-button-styles'

const QuestionTwoAnswerSixButton = ({shortnessOfBreathPressed}) => {
    return (
        <TouchableOpacity onPress={shortnessOfBreathPressed}>
            <Text style={styles.button}>{QUESTION_TWO_BUTTON_ANSWER_SIX}</Text>
        </TouchableOpacity>
    )
};

QuestionTwoAnswerSixButton.propTypes = {
    shortnessOfBreathPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    shortnessOfBreathPressed: () => dispatch(shortnessOfBreathPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTwoAnswerSixButton);