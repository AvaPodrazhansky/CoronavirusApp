import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {visitedForeignCountriesPressed} from "../../../../actions/symptom-survey/question3";
import {QUESTION_THREE_BUTTON_NO} from "../../../../constants/constant-list";
import styles from '../survey-button-styles'

const QuestionThreeNoButton = ({visitedForeignCountriesPressed}) => {
    return (
        <TouchableOpacity onPress={visitedForeignCountriesPressed}>
            <Text style={styles.button}>{QUESTION_THREE_BUTTON_NO}</Text>
        </TouchableOpacity>
    )
};

QuestionThreeNoButton.propTypes = {
    visitedForeignCountriesPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    visitedForeignCountriesPressed: value => dispatch(visitedForeignCountriesPressed(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionThreeNoButton);