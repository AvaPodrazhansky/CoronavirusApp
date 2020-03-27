import {FOREIGN_COUNTRIES} from "../../actions/symptom-survey/question3";
import {RESET_SURVEY} from "../../actions/symptom-survey/submit-survey";

const defaultState = {
    visitedForeignCountries: null
};

const question3 = (state = defaultState, action) => {
    switch (action.type) {
        case FOREIGN_COUNTRIES:
            return {
                ...state,
                visitedForeignCountries: action.payload
            };
        case RESET_SURVEY:
            return defaultState;
        default:
            return state;
    }
};

export default question3;