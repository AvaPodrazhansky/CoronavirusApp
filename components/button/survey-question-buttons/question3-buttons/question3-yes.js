import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {visitedForeignCountriesPressed} from "../../../../actions/symptom-survey/question3";

const QuestionThreeYesButton = ({visitedForeignCountriesPressed}) => {
    return (
        <Button
            title="Yes"
            onPress={() => visitedForeignCountriesPressed(true)}
        />
    )
};

const styles = StyleSheet.create({});

QuestionThreeYesButton.propTypes = {
    visitedForeignCountriesPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    visitedForeignCountriesPressed: value => dispatch(visitedForeignCountriesPressed(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionThreeYesButton);