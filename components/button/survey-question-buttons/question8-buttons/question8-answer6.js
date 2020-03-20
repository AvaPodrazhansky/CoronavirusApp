import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {cancerPressed} from "../../../../actions/symptom-survey/question8";
import {QUESTION_EIGHT_BUTTON_ANSWER_SIX} from "../../../../constants/constant-list";

const QuestionEightAnswerSixButton = ({cancerPressed}) => {
    return (
        <TouchableOpacity onPress={cancerPressed}>
            <Text style={styles.button}>{QUESTION_EIGHT_BUTTON_ANSWER_SIX}</Text>
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

QuestionEightAnswerSixButton.propTypes = {
    cancerPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    cancerPressed: () => dispatch(cancerPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionEightAnswerSixButton);