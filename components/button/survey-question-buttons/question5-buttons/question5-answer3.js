import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {firstQuestionSymptomsPressed} from "../../../../actions/symptom-survey/question5";


const QuestionFiveAnswerThreeButton = ({firstQuestionSymptomsPressed}) => {
    return (
        <Button
            title="Other people who are experiencing the symptoms listed on the first question"
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