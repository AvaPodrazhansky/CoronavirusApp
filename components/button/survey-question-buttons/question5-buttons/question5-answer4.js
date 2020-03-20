import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {suspectedCOVIDPressed} from "../../../../actions/symptom-survey/question5";
import {QUESTION_FIVE_BUTTON_ANSWER_FOUR} from "../../../../constants/constant-list";


const QuestionFiveAnswerFourButton = ({suspectedCOVIDPressed}) => {
    return (
        <TouchableOpacity onPress={suspectedCOVIDPressed}>
            <Text style={styles.button}>{QUESTION_FIVE_BUTTON_ANSWER_FOUR}</Text>
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

QuestionFiveAnswerFourButton.propTypes = {
    suspectedCOVIDPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    suspectedCOVIDPressed: () => dispatch(suspectedCOVIDPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionFiveAnswerFourButton);