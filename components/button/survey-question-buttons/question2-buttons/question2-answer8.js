import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {conjunctivitisPressed} from "../../../../actions/symptom-survey/question2";
import {QUESTION_TWO_BUTTON_ANSWER_EIGHT} from "../../../../constants/constant-list";

const QuestionTwoAnswerEightButton = ({conjunctivitisPressed}) => {
    return (
        <TouchableOpacity onPress={conjunctivitisPressed}>
            <Text style={styles.button}>{QUESTION_TWO_BUTTON_ANSWER_EIGHT}</Text>
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

QuestionTwoAnswerEightButton.propTypes = {
    conjunctivitisPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    conjunctivitisPressed: () => dispatch(conjunctivitisPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTwoAnswerEightButton);