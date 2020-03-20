import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {extremeFatiguePressed} from "../../../../actions/symptom-survey/question2";
import {QUESTION_TWO_BUTTON_ANSWER_TWO} from "../../../../constants/constant-list";


const QuestionTwoAnswerTwoButton = ({extremeFatiguePressed}) => {
    return (
        <TouchableOpacity onPress={extremeFatiguePressed}>
            <Text style={styles.button}>{QUESTION_TWO_BUTTON_ANSWER_TWO}</Text>
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

QuestionTwoAnswerTwoButton.propTypes = {
    extremeFatiguePressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    extremeFatiguePressed: () => dispatch(extremeFatiguePressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTwoAnswerTwoButton);