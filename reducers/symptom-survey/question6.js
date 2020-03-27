import {
    SET_AGE
} from "../../actions/symptom-survey/question6";
import {RESET_SURVEY} from "../../actions/symptom-survey/submit-survey";

const defaultState = {
    age: 0
};

const question6 = (state = defaultState, action) => {
    switch (action.type) {
        case SET_AGE:
            console.log(action.payload);
            return {
                ...state,
                age: action.payload
            };
        case RESET_SURVEY:
            return defaultState;
        default:
            return state;
    }
};

export default question6;