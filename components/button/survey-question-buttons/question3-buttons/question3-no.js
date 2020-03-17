import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {visitedForeignCountriesPressed} from "../../../../actions/symptom-survey/question3";
import {QUESTION_THREE_BUTTON_NO} from "../../../../constants/constant-list";

const QuestionThreeNoButton = ({visitedForeignCountriesPressed}) => {
    return (
        <Button
            title={QUESTION_THREE_BUTTON_NO}
            onPress={() => visitedForeignCountriesPressed(false)}
        />
    )
};

const styles = StyleSheet.create({});

QuestionThreeNoButton.propTypes = {
    visitedForeignCountriesPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    visitedForeignCountriesPressed: value => dispatch(visitedForeignCountriesPressed(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionThreeNoButton);