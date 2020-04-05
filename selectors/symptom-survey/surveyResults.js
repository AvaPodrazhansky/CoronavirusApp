const getIsShowingDiagnosisScreen = state => state.symptomSurvey.surveyResults.showDiagnosisScreen;

const getIsShowingResultsScreen = state => state.symptomSurvey.surveyResults.showResultScreen;

const getDiagnosis = state => state.symptomSurvey.surveyResults.diagnosis;

export {
    getIsShowingDiagnosisScreen,
    getIsShowingResultsScreen,
    getDiagnosis
};
