import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {diarrheaPressed} from "../../../../actions/symptom-survey/question2";
import {QUESTION_TWO_BUTTON_ANSWER_SEVEN} from "../../../../constants/constant-list";
import styles from '../survey-button-styles'

const QuestionTwoAnswerSevenButton = ({diarrheaPressed}) => {
    return (
        <TouchableOpacity onPress={diarrheaPressed}>
            <Text style={styles.button}>{QUESTION_TWO_BUTTON_ANSWER_SEVEN}</Text>
        </TouchableOpacity>
    )
};

QuestionTwoAnswerSevenButton.propTypes = {
    diarrheaPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    diarrheaPressed: () => dispatch(diarrheaPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTwoAnswerSevenButton);