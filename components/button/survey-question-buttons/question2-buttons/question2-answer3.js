import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {symptomChillsPressed} from "../../../../actions/symptom-survey/question2";

const QuestionTwoAnswerThreeButton = ({symptomChillsPressed}) => {
    return (
        <Button
            title="Symptoms of Chills or Tremors"
            onPress={() => symptomChillsPressed()}
        />
    )
};

const styles = StyleSheet.create({});

QuestionTwoAnswerThreeButton.propTypes = {
    symptomChillsPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    symptomChillsPressed: () => dispatch(symptomChillsPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTwoAnswerThreeButton);