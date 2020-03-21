import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {submitSurvey} from "../../../actions/symptom-survey/submit-survey";
import {SUBMIT_BUTTON_TEXT} from "../../../constants/constant-list";
import Button from './index'
import styles from './button-styles'

const SubmitButton = ({submitSurvey}) => {
    return (
        <Button
            title={SUBMIT_BUTTON_TEXT}
            actionFunction={submitSurvey}
            buttonStyle={styles.button}
            color={'#ED741D'}
        />
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