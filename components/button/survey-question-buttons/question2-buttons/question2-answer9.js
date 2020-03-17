import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {feelingFlusteredPressed} from "../../../../actions/symptom-survey/question2";
import {QUESTION_TWO_BUTTON_ANSWER_NINE} from "../../../../constants/constant-list";

const QuestionTwoAnswerNineButton = ({feelingFlusteredPressed}) => {
    return (
        <Button
            title={QUESTION_TWO_BUTTON_ANSWER_NINE}
            onPress={() => feelingFlusteredPressed()}
        />
    )
};

const styles = StyleSheet.create({});

QuestionTwoAnswerNineButton.propTypes = {
    feelingFlusteredPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    feelingFlusteredPressed: () => dispatch(feelingFlusteredPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTwoAnswerNineButton);