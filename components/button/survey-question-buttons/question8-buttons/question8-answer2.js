import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {coronaryHeartDiseasePressed} from "../../../../actions/symptom-survey/question8";
import {QUESTION_EIGHT_BUTTON_ANSWER_TWO} from "../../../../constants/constant-list";

const QuestionEightAnswerTwoButton = ({coronaryHeartDiseasePressed}) => {
    return (
        <Button
            title={QUESTION_EIGHT_BUTTON_ANSWER_TWO}
            onPress={() => coronaryHeartDiseasePressed()}
        />
    )
};

const styles = StyleSheet.create({});

QuestionEightAnswerTwoButton.propTypes = {
    coronaryHeartDiseasePressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    coronaryHeartDiseasePressed: () => dispatch(coronaryHeartDiseasePressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionEightAnswerTwoButton);