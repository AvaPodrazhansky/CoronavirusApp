import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {diabetesPressed} from "../../../../actions/symptom-survey/question8";
import {QUESTION_EIGHT_BUTTON_ANSWER_THREE} from "../../../../constants/constant-list";

const QuestionEightAnswerThreeButton = ({diabetesPressed}) => {
    return (
        <TouchableOpacity onPress={diabetesPressed}>
            <Text style={styles.button}>{QUESTION_EIGHT_BUTTON_ANSWER_THREE}</Text>
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

QuestionEightAnswerThreeButton.propTypes = {
    diabetesPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    diabetesPressed: () => dispatch(diabetesPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionEightAnswerThreeButton);