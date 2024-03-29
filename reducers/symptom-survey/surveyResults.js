import {
    SHOW_RESULT_SCREEN,
    SHOW_DIAGNOSIS_SCREEN,
    RESET_SURVEY,
    SET_DIAGNOSIS
} from '../../actions/symptom-survey/submit-survey';

const defaultState = {
    showResultScreen: false,
    showDiagnosisScreen: false,
    diagnosis: null
};

const surveyResults = (state = defaultState, action) => {
    switch (action.type) {
        case SHOW_RESULT_SCREEN:
            return {
                ...state,
                showResultScreen: true
            };
        case SHOW_DIAGNOSIS_SCREEN:
            return {
                ...state,
                showDiagnosisScreen: true
            };
        case SET_DIAGNOSIS:
            return {
                ...state,
                diagnosis: (action.payload > 50)
            };
        case RESET_SURVEY:
            return defaultState;
        default:
            return state;
    }
};

export default surveyResults;
