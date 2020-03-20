import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {coughingPressed} from "../../../../actions/symptom-survey/question2";
import {QUESTION_TWO_BUTTON_ANSWER_FIVE} from "../../../../constants/constant-list";

const QuestionTwoAnswerFiveButton = ({coughingPressed}) => {
    return (
        <TouchableOpacity onPress={coughingPressed}>
            <Text style={styles.button}>{QUESTION_TWO_BUTTON_ANSWER_FIVE}</Text>
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

QuestionTwoAnswerFiveButton.propTypes = {
    coughingPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    coughingPressed: () => dispatch(coughingPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTwoAnswerFiveButton);