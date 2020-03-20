import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {wildAnimalsPressed} from "../../../../actions/symptom-survey/question5";
import {QUESTION_FIVE_BUTTON_ANSWER_ONE} from "../../../../constants/constant-list";


const QuestionFiveAnswerOneButton = ({wildAnimalsPressed}) => {
    return (
        <TouchableOpacity onPress={wildAnimalsPressed}>
            <Text style={styles.button}>{QUESTION_FIVE_BUTTON_ANSWER_ONE}</Text>
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

QuestionFiveAnswerOneButton.propTypes = {
    wildAnimalsPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    wildAnimalsPressed: () => dispatch(wildAnimalsPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionFiveAnswerOneButton);