import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {submitSurvey} from "../../../actions/symptom-survey/submit-survey";
import {SUBMIT_BUTTON_TEXT} from "../../../constants/constant-list";
import styles from './survey-button-styles'

const SubmitButton = ({submitSurvey}) => {
    return (
        <TouchableOpacity onPress={submitSurvey}>
            <Text style={styles.button}>{SUBMIT_BUTTON_TEXT}</Text>
        </TouchableOpacity>
    )
};

SubmitButton.propTypes = {
    submitSurvey: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    submitSurvey: () => dispatch(submitSurvey())
});

export default connect(mapStateToProps, mapDispatchToProps)(SubmitButton);