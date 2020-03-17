import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {notListedAbovePressed} from "../../../../actions/symptom-survey/question2";
import {QUESTION_TWO_BUTTON_ANSWER_TWELVE} from "../../../../constants/constant-list";

const QuestionTwoAnswerTwelveButton = ({notListedAbovePressed}) => {
    return (
        <Button
            title={QUESTION_TWO_BUTTON_ANSWER_TWELVE}
            onPress={() => notListedAbovePressed()}
        />
    )
};

const styles = StyleSheet.create({});

QuestionTwoAnswerTwelveButton.propTypes = {
    notListedAbovePressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    notListedAbovePressed: () => dispatch(notListedAbovePressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTwoAnswerTwelveButton);