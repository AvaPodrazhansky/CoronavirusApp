import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {suspectedCOVIDPressed} from "../../../../actions/symptom-survey/question5";
import {QUESTION_FIVE_BUTTON_ANSWER_FOUR} from "../../../../constants/constant-list";


const QuestionFiveAnswerFourButton = ({suspectedCOVIDPressed}) => {
    return (
        <Button
            title={QUESTION_FIVE_BUTTON_ANSWER_FOUR}
            onPress={() => suspectedCOVIDPressed()}
        />
    )
};

const styles = StyleSheet.create({});

QuestionFiveAnswerFourButton.propTypes = {
    suspectedCOVIDPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    suspectedCOVIDPressed: () => dispatch(suspectedCOVIDPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionFiveAnswerFourButton);