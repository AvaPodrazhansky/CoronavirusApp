import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {cerebrovascularDiseasePressed} from "../../../../actions/symptom-survey/question8";
import {QUESTION_EIGHT_BUTTON_ANSWER_NINE} from "../../../../constants/constant-list";

const QuestionEightAnswerNineButton = ({cerebrovascularDiseasePressed}) => {
    return (
        <TouchableOpacity onPress={cerebrovascularDiseasePressed}>
            <Text style={styles.button}>{QUESTION_EIGHT_BUTTON_ANSWER_NINE}</Text>
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

QuestionEightAnswerNineButton.propTypes = {
    cerebrovascularDiseasePressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    cerebrovascularDiseasePressed: () => dispatch(cerebrovascularDiseasePressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionEightAnswerNineButton);