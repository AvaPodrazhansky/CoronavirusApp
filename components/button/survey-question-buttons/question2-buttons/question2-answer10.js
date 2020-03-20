import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {persistentHeadachePressed} from "../../../../actions/symptom-survey/question2";
import {QUESTION_TWO_BUTTON_ANSWER_TEN} from "../../../../constants/constant-list";

const QuestionTwoAnswerTenButton = ({persistentHeadachePressed}) => {
    return (
        <TouchableOpacity onPress={persistentHeadachePressed}>
            <Text style={styles.button}>{QUESTION_TWO_BUTTON_ANSWER_TEN}</Text>
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

QuestionTwoAnswerTenButton.propTypes = {
    persistentHeadachePressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    persistentHeadachePressed: () => dispatch(persistentHeadachePressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTwoAnswerTenButton);