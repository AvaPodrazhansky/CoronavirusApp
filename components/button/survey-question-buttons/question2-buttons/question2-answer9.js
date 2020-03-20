import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {feelingFlusteredPressed} from "../../../../actions/symptom-survey/question2";
import {QUESTION_TWO_BUTTON_ANSWER_NINE} from "../../../../constants/constant-list";

const QuestionTwoAnswerNineButton = ({feelingFlusteredPressed}) => {
    return (
        <TouchableOpacity onPress={feelingFlusteredPressed}>
            <Text style={styles.button}>{QUESTION_TWO_BUTTON_ANSWER_NINE}</Text>
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

QuestionTwoAnswerNineButton.propTypes = {
    feelingFlusteredPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    feelingFlusteredPressed: () => dispatch(feelingFlusteredPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTwoAnswerNineButton);