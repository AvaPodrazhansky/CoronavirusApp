import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {visitedForeignCountriesPressed} from "../../../../actions/symptom-survey/question3";

const QuestionThreeNoButton = ({visitedForeignCountriesPressed}) => {
    return (
        <Button
            title="No"
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