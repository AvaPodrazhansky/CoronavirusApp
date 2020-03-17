import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {presenceConfirmedCOVIDPressed} from "../../../../actions/symptom-survey/question5";

const QuestionFiveAnswerFiveButton = ({presenceConfirmedCOVIDPressed}) => {
    return (
        <Button
            title="Presence of confirmed COVID-19 case(s) in your community"
            onPress={() => presenceConfirmedCOVIDPressed()}
        />
    )
};

const styles = StyleSheet.create({});

QuestionFiveAnswerFiveButton.propTypes = {
    presenceConfirmedCOVIDPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    presenceConfirmedCOVIDPressed: () => dispatch(presenceConfirmedCOVIDPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionFiveAnswerFiveButton);