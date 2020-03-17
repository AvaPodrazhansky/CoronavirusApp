import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {extremeFatiguePressed} from "../../../../actions/symptom-survey/question2";
import {QUESTION_TWO_BUTTON_ANSWER_TWO} from "../../../../constants/constant-list";


const QuestionTwoAnswerTwoButton = ({extremeFatiguePressed}) => {
    return (
        <Button
            title={QUESTION_TWO_BUTTON_ANSWER_TWO}
            onPress={() => extremeFatiguePressed()}
        />
    )
};

const styles = StyleSheet.create({});

QuestionTwoAnswerTwoButton.propTypes = {
    extremeFatiguePressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    extremeFatiguePressed: () => dispatch(extremeFatiguePressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTwoAnswerTwoButton);