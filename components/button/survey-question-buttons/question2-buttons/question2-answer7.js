import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {diarrheaPressed} from "../../../../actions/symptom-survey/question2";
import {QUESTION_TWO_BUTTON_ANSWER_SEVEN} from "../../../../constants/constant-list";

const QuestionTwoAnswerSevenButton = ({diarrheaPressed}) => {
    return (
        <TouchableOpacity onPress={diarrheaPressed}>
            <Text style={styles.button}>{QUESTION_TWO_BUTTON_ANSWER_SEVEN}</Text>
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

QuestionTwoAnswerSevenButton.propTypes = {
    diarrheaPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    diarrheaPressed: () => dispatch(diarrheaPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTwoAnswerSevenButton);