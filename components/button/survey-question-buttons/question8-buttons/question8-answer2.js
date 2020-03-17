import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {coronaryHeartDiseasePressed} from "../../../../actions/symptom-survey/question8";

const QuestionEightAnswerTwoButton = ({coronaryHeartDiseasePressed}) => {
    return (
        <Button
            title="Coronary Heart Disease or Heart Failure"
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