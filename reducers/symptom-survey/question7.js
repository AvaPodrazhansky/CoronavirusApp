import {SET_SEX} from "../../actions/symptom-survey/question7";
import {RESET_SURVEY} from "../../actions/symptom-survey/submit-survey";

const defaultState = {
    sex: null
};

const question7 = (state = defaultState, action) => {
    switch (action.type) {
        case SET_SEX:
            return {
                ...state,
                sex: action.payload
            };
        case RESET_SURVEY:
            return defaultState;
        default:
            return state;
    }
};

export default question7;