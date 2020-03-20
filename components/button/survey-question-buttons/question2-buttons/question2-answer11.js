import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {decreasedSweatingPressed} from "../../../../actions/symptom-survey/question2";
import {QUESTION_TWO_BUTTON_ANSWER_ELEVEN} from "../../../../constants/constant-list";

const QuestionTwoAnswerElevenButton = ({decreasedSweatingPressed}) => {
    return (
        <TouchableOpacity onPress={decreasedSweatingPressed}>
            <Text style={styles.button}>{QUESTION_TWO_BUTTON_ANSWER_ELEVEN}</Text>
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

QuestionTwoAnswerElevenButton.propTypes = {
    decreasedSweatingPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    decreasedSweatingPressed: () => dispatch(decreasedSweatingPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTwoAnswerElevenButton);