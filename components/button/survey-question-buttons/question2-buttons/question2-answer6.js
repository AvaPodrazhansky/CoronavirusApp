import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {shortnessOfBreathPressed} from "../../../../actions/symptom-survey/question2";
import {QUESTION_TWO, QUESTION_TWO_BUTTON_ANSWER_SIX} from "../../../../constants/constant-list";

const QuestionTwoAnswerSixButton = ({shortnessOfBreathPressed}) => {
    return (
        <Button
            title={QUESTION_TWO_BUTTON_ANSWER_SIX}
            onPress={() => shortnessOfBreathPressed()}
        />
    )
};

const styles = StyleSheet.create({});

QuestionTwoAnswerSixButton.propTypes = {
    shortnessOfBreathPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    shortnessOfBreathPressed: () => dispatch(shortnessOfBreathPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTwoAnswerSixButton);