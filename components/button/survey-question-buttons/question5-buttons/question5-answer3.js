import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {firstQuestionSymptomsPressed} from "../../../../actions/symptom-survey/question5";
import {QUESTION_FIVE_BUTTON_ANSWER_THREE} from "../../../../constants/constant-list";


const QuestionFiveAnswerThreeButton = ({firstQuestionSymptomsPressed}) => {
    return (
        <Button
            title={QUESTION_FIVE_BUTTON_ANSWER_THREE}
            onPress={() => firstQuestionSymptomsPressed()}
        />
    )
};

const styles = StyleSheet.create({});

QuestionFiveAnswerThreeButton.propTypes = {
    firstQuestionSymptomsPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    firstQuestionSymptomsPressed: () => dispatch(firstQuestionSymptomsPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionFiveAnswerThreeButton);