import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {presenceConfirmedCOVIDPressed} from "../../../../actions/symptom-survey/question5";
import {QUESTION_FIVE_BUTTON_ANSWER_FIVE} from "../../../../constants/constant-list";

const QuestionFiveAnswerFiveButton = ({presenceConfirmedCOVIDPressed}) => {
    return (
        <TouchableOpacity onPress={presenceConfirmedCOVIDPressed}>
            <Text style={styles.button}>{QUESTION_FIVE_BUTTON_ANSWER_FIVE}</Text>
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

QuestionFiveAnswerFiveButton.propTypes = {
    presenceConfirmedCOVIDPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    presenceConfirmedCOVIDPressed: () => dispatch(presenceConfirmedCOVIDPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionFiveAnswerFiveButton);