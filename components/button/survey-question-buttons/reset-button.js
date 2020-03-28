import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {resetSurvey} from "../../../actions/symptom-survey/submit-survey";
import {RESTART_BUTTON_TEXT} from "../../../constants/constant-list";
import Button from './index'
import styles from './button-styles'

const ResetButton = ({resetSurvey}) => {
    return (
        <Button
            title={RESTART_BUTTON_TEXT}
            actionFunction={resetSurvey}
            buttonStyle={styles.button}
            color={'#ED741D'}
        />
    )
};

ResetButton.propTypes = {
    resetSurvey: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    resetSurvey: () => dispatch(resetSurvey())
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetButton);
