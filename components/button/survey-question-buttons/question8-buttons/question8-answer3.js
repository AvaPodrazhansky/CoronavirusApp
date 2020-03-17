import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {diabetesPressed} from "../../../../actions/symptom-survey/question8";
import {QUESTION_EIGHT_BUTTON_ANSWER_THREE} from "../../../../constants/constant-list";

const QuestionEightAnswerThreeButton = ({diabetesPressed}) => {
    return (
        <Button
            title={QUESTION_EIGHT_BUTTON_ANSWER_THREE}
            onPress={() => diabetesPressed()}
        />
    )
};

const styles = StyleSheet.create({});

QuestionEightAnswerThreeButton.propTypes = {
    diabetesPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    diabetesPressed: () => dispatch(diabetesPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionEightAnswerThreeButton);