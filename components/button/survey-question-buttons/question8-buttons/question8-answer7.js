import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {liverCirrhosisPressed} from "../../../../actions/symptom-survey/question8";
import {QUESTION_EIGHT_BUTTON_ANSWER_SEVEN} from "../../../../constants/constant-list";

const QuestionEightAnswerSevenButton = ({liverCirrhosisPressed}) => {
    return (
        <TouchableOpacity onPress={liverCirrhosisPressed}>
            <Text style={styles.button}>{QUESTION_EIGHT_BUTTON_ANSWER_SEVEN}</Text>
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

QuestionEightAnswerSevenButton.propTypes = {
    liverCirrhosisPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    liverCirrhosisPressed: () => dispatch(liverCirrhosisPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionEightAnswerSevenButton);