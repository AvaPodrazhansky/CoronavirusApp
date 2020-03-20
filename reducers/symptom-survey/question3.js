import {FOREIGN_COUNTRIES} from "../../actions/symptom-survey/question3";

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
        default:
            return state;
    }
};

export default question3;