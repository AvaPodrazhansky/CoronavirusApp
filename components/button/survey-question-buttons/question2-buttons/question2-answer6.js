import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {shortnessOfBreathPressed} from "../../../../actions/symptom-survey/question2";

const QuestionTwoAnswerSixButton = ({shortnessOfBreathPressed}) => {
    return (
        <Button
            title="Shortness of Breath (accompanied by decreased physical strength and energy)"
            onPress={() => shortnessOfBreathPressed()}
        />
    )
};

const styles = StyleSheet.create({});

QuestionTwoAnswerSixButton.propTypes = {
    shortnessOfBreathPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    shortnessOfBreathPressed: () => dispatch(shortnessOfBreathPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTwoAnswerSixButton);