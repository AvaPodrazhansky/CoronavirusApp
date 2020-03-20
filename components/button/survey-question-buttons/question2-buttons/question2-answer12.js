import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {notListedAbovePressed} from "../../../../actions/symptom-survey/question2";
import {QUESTION_TWO_BUTTON_ANSWER_TWELVE} from "../../../../constants/constant-list";

const QuestionTwoAnswerTwelveButton = ({notListedAbovePressed}) => {
    return (
        <TouchableOpacity onPress={notListedAbovePressed}>
            <Text style={styles.button}>{QUESTION_TWO_BUTTON_ANSWER_TWELVE}</Text>
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

QuestionTwoAnswerTwelveButton.propTypes = {
    notListedAbovePressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    notListedAbovePressed: () => dispatch(notListedAbovePressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTwoAnswerTwelveButton);