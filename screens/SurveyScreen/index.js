import * as React from 'react';
import {connect} from 'react-redux';
import SymptomSurveyScreen from './SymptomSurveyScreen';
import DiagnosisResultScreen from './DiagnosisResultScreen';
import {getIsShowingResultsScreen} from "../../selectors/symptom-survey/surveyResults";
import PropTypes from "prop-types";

const SurveyScreen = ({showResultScreen}) => {
    if (showResultScreen) {
        return (
            <DiagnosisResultScreen/>
        );
    } else {
        return (
            <SymptomSurveyScreen/>
        );
    }
};

SurveyScreen.navigationOptions = {
    header: null,
};

SurveyScreen.propTypes = {
    showResultScreen: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    showResultScreen: getIsShowingResultsScreen(state)
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SurveyScreen);
