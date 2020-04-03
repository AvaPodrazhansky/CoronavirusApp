const SHOW_DIAGNOSIS_SCREEN = 'SHOW_DIAGNOSIS_SCREEN';
const showDiagnosisScreen = () => {
    return {
        type: SHOW_DIAGNOSIS_SCREEN,
    }
};

const SHOW_RESULT_SCREEN = 'SHOW_RESULT_SCREEN';
const showResultScreen = () => {
    return {
        type: SHOW_RESULT_SCREEN,
    }
};

const RESET_SURVEY = 'RESET_SURVEY';
const resetSurvey = () => {
    return {
        type: RESET_SURVEY,
    }
};

function submitSurvey() {
    return (dispatch, getState) => {
        const state = getState();
        // console.log(Object.keys(state));
        console.log(state.symptomSurvey);
        dispatch(showResultScreen())
    };
}

export {
    submitSurvey,
    SHOW_RESULT_SCREEN,
    showResultScreen,
    RESET_SURVEY,
    resetSurvey,
    SHOW_DIAGNOSIS_SCREEN,
    showDiagnosisScreen
}
