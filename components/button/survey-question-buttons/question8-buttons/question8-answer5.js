import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {hormoneMedicationPressed} from "../../../../actions/symptom-survey/question8";
import {QUESTION_EIGHT_BUTTON_ANSWER_FIVE} from "../../../../constants/constant-list";

const QuestionEightAnswerFiveButton = ({hormoneMedicationPressed}) => {
    return (
        <TouchableOpacity onPress={hormoneMedicationPressed}>
            <Text style={styles.button}>{QUESTION_EIGHT_BUTTON_ANSWER_FIVE}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 12,
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        overflow: 'hidden',
        padding: 12,
        textAlign: 'center',
    }
});

QuestionEightAnswerFiveButton.propTypes = {
    hormoneMedicationPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    hormoneMedicationPressed: () => dispatch(hormoneMedicationPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionEightAnswerFiveButton);