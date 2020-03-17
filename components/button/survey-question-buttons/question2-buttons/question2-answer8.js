import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {conjunctivitisPressed} from "../../../../actions/symptom-survey/question2";
import {QUESTION_TWO_BUTTON_ANSWER_EIGHT} from "../../../../constants/constant-list";

const QuestionTwoAnswerEightButton = ({conjunctivitisPressed}) => {
    return (
        <Button
            title={QUESTION_TWO_BUTTON_ANSWER_EIGHT}
            onPress={() => conjunctivitisPressed()}
        />
    )
};

const styles = StyleSheet.create({});

QuestionTwoAnswerEightButton.propTypes = {
    conjunctivitisPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    conjunctivitisPressed: () => dispatch(conjunctivitisPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTwoAnswerEightButton);