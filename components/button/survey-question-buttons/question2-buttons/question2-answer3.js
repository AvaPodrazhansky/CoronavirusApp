import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {symptomChillsPressed} from "../../../../actions/symptom-survey/question2";
import {QUESTION_TWO_BUTTON_ANSWER_THREE} from "../../../../constants/constant-list";

const QuestionTwoAnswerThreeButton = ({symptomChillsPressed}) => {
    return (
        <Button
            title={QUESTION_TWO_BUTTON_ANSWER_THREE}
            onPress={() => symptomChillsPressed()}
        />
    )
};

const styles = StyleSheet.create({});

QuestionTwoAnswerThreeButton.propTypes = {
    symptomChillsPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    symptomChillsPressed: () => dispatch(symptomChillsPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTwoAnswerThreeButton);