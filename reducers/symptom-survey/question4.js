import {SET_PUBLIC_TRANSPORTATION} from "../../actions/symptom-survey/question4";
import {RESET_SURVEY} from "../../actions/symptom-survey/submit-survey";

const defaultState = {
    number: 0
};

const question4 = (state = defaultState, action) => {
    switch (action.type) {
        case SET_PUBLIC_TRANSPORTATION:
            return {
                ...state,
                number: action.payload
            };
        case RESET_SURVEY:
            return defaultState;
        default:
            return state;
    }
};

export default question4;