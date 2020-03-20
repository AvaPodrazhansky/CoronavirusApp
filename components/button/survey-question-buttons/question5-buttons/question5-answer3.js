import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {firstQuestionSymptomsPressed} from "../../../../actions/symptom-survey/question5";
import {QUESTION_FIVE_BUTTON_ANSWER_THREE} from "../../../../constants/constant-list";


const QuestionFiveAnswerThreeButton = ({firstQuestionSymptomsPressed}) => {
    return (
        <TouchableOpacity onPress={firstQuestionSymptomsPressed}>
            <Text style={styles.button}>{QUESTION_FIVE_BUTTON_ANSWER_THREE}</Text>
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

QuestionFiveAnswerThreeButton.propTypes = {
    firstQuestionSymptomsPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    firstQuestionSymptomsPressed: () => dispatch(firstQuestionSymptomsPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionFiveAnswerThreeButton);