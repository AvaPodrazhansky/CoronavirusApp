import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {setSex} from "../../../../actions/symptom-survey/question7";
import {QUESTION_SEVEN_BUTTON_MALE} from "../../../../constants/constant-list";

const QuestionSevenMaleButton = ({setSex}) => {
    return (
        <TouchableOpacity onPress={setSex}>
            <Text style={styles.button}>{QUESTION_SEVEN_BUTTON_MALE}</Text>
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

QuestionSevenMaleButton.propTypes = {
    setSex: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    setSex: value => dispatch(setSex(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionSevenMaleButton);