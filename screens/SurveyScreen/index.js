import * as React from 'react';
import {connect} from 'react-redux';
import SymptomSurveyScreen from './SymptomSurveyScreen';
import DiagnosisResultScreen from './DiagnosisResultScreen';
import DiagnosisTermsScreen from "./DiagnosisTermsScreen";
import {getIsShowingResultsScreen, getIsShowingDiagnosisScreen} from "../../selectors/symptom-survey/surveyResults";
import PropTypes from "prop-types";

const SurveyScreen = ({showResultScreen, showDiagnosisScreen, ...props}) => {
    if (showResultScreen) {
        return (
            <DiagnosisResultScreen props={props}/>
        );
    } else if (showDiagnosisScreen) {
        return (
            <SymptomSurveyScreen/>
        );
    } else {
        return (
            <DiagnosisTermsScreen/>
        );
    }
};

SurveyScreen.navigationOptions = {
    header: null,
};

SurveyScreen.propTypes = {
    showResultScreen: PropTypes.bool.isRequired,
    showDiagnosisScreen: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    showResultScreen: getIsShowingResultsScreen(state),
    showDiagnosisScreen: getIsShowingDiagnosisScreen(state)
});

const mapDispatchToProps = (dispatch, props) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SurveyScreen);
