import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {setSex} from "../../../../actions/symptom-survey/question7";
import {QUESTION_SEVEN_BUTTON_FEMALE} from "../../../../constants/constant-list";
import styles from '../survey-button-styles'

const QuestionSevenFemaleButton = ({setSex}) => {
    return (
        <TouchableOpacity onPress={setSex}>
            <Text style={styles.button}>{QUESTION_SEVEN_BUTTON_FEMALE}</Text>
        </TouchableOpacity>
    )
};

QuestionSevenFemaleButton.propTypes = {
    setSex: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    setSex: value => dispatch(setSex(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionSevenFemaleButton);