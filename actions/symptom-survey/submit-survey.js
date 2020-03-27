const SHOW_RESULT_SCREEN = 'SHOW_RESULT_SCREEN';
const showResultScreen = () => {
    return {
        type: SHOW_RESULT_SCREEN,
        // payload: value // true if results screen is showing
    }
};

const RESET_SURVEY = 'RESET_SURVEY';
const resetSurvey = () => {
    return {
        type: RESET_SURVEY,
        // payload: value // true if results screen is showing
    }
};

function submitSurvey() {
    return (dispatch, getState) => {
        const state = getState();
        console.log(Object.keys(state));
        // console.log(state.symptomSurvey)
        dispatch(showResultScreen())
    };
}

export {
    submitSurvey,
    SHOW_RESULT_SCREEN,
    showResultScreen,
    RESET_SURVEY,
    resetSurvey
}