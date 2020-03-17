import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {submitSurvey} from "../../../actions/symptom-survey/submit-survey";
import {SUBMIT_BUTTON_TEXT} from "../../../constants/constant-list";

const SubmitButton = ({submitSurvey}) => {
    return (
        <Button
            title={SUBMIT_BUTTON_TEXT}
            onPress={() => submitSurvey()}
        />
    )
};

const styles = StyleSheet.create({});

SubmitButton.propTypes = {
    submitSurvey: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    submitSurvey: () => dispatch(submitSurvey())
});

export default connect(mapStateToProps, mapDispatchToProps)(SubmitButton);