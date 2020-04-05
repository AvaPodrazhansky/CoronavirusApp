import {POTENTIALLY_EXPOSED} from "../../actions/symptom-survey/question3";
import {RESET_SURVEY} from "../../actions/symptom-survey/submit-survey";

const defaultState = {
    exposed: null
};

const question3 = (state = defaultState, action) => {
    switch (action.type) {
        case POTENTIALLY_EXPOSED:
            return {
                ...state,
                exposed: action.payload
            };
        case RESET_SURVEY:
            return defaultState;
        default:
            return state;
    }
};

export default question3;
