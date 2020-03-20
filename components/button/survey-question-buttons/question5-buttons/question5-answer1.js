import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {wildAnimalsPressed} from "../../../../actions/symptom-survey/question5";
import {QUESTION_FIVE_BUTTON_ANSWER_ONE} from "../../../../constants/constant-list";
import styles from '../survey-button-styles'


const QuestionFiveAnswerOneButton = ({wildAnimalsPressed}) => {
    return (
        <TouchableOpacity onPress={wildAnimalsPressed}>
            <Text style={styles.button}>{QUESTION_FIVE_BUTTON_ANSWER_ONE}</Text>
        </TouchableOpacity>
    )
};

QuestionFiveAnswerOneButton.propTypes = {
    wildAnimalsPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    wildAnimalsPressed: () => dispatch(wildAnimalsPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionFiveAnswerOneButton);