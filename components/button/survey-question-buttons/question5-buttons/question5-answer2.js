import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {foreignContactPressed} from "../../../../actions/symptom-survey/question5";
import {QUESTION_FIVE_BUTTON_ANSWER_TWO} from "../../../../constants/constant-list";


const QuestionFiveAnswerTwoButton = ({foreignContactPressed}) => {
    return (
        <Button
            title={QUESTION_FIVE_BUTTON_ANSWER_TWO}
            onPress={() => foreignContactPressed()}
        />
    )
};

const styles = StyleSheet.create({});

QuestionFiveAnswerTwoButton.propTypes = {
    foreignContactPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    foreignContactPressed: () => dispatch(foreignContactPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionFiveAnswerTwoButton);