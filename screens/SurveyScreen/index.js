import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import SymptomSurveyScreen from './SymptomSurveyScreen';
import DiagnosisResultScreen from './DiagnosisResultScreen';
import {getIsShowingResultsScreen} from "../../selectors/symptom-survey/surveyResults";

const SurveyScreen = ({showResultScreen}) => {
    if (showResultScreen) {
        return (
            <DiagnosisResultScreen/>
        )
    } else {
        return (
            <SymptomSurveyScreen/>
        );
    }

};


const mapStateToProps = state => ({
    showResultScreen: getIsShowingResultsScreen(state)
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SurveyScreen);
