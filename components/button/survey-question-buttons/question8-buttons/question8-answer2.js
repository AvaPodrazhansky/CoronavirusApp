import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {coronaryHeartDiseasePressed} from "../../../../actions/symptom-survey/question8";
import {QUESTION_EIGHT_BUTTON_ANSWER_TWO} from "../../../../constants/constant-list";

const QuestionEightAnswerTwoButton = ({coronaryHeartDiseasePressed}) => {
    return (
        <TouchableOpacity onPress={coronaryHeartDiseasePressed}>
            <Text style={styles.button}>{QUESTION_EIGHT_BUTTON_ANSWER_TWO}</Text>
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

QuestionEightAnswerTwoButton.propTypes = {
    coronaryHeartDiseasePressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    coronaryHeartDiseasePressed: () => dispatch(coronaryHeartDiseasePressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionEightAnswerTwoButton);