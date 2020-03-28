const getIsShowingResultsScreen = state => state.symptomSurvey.surveyResults.showResultScreen;

const getDiagnosis = state => state.symptomSurvey.surveyResults.diagnosis;

export {
    getIsShowingResultsScreen,
    getDiagnosis
};