import {
    SET_LOCATION
} from "../../actions/symptom-survey/question1";
import {RESET_SURVEY} from "../../actions/symptom-survey/submit-survey";

const defaultState = {
    location: ''
};

const question1 = (state = defaultState, action) => {
    switch (action.type) {
        case SET_LOCATION:
            console.log(action.payload);
            return {
                ...state,
                location: action.payload
            };
        case RESET_SURVEY:
            return defaultState;
        default:
            return state;
    }
};

export default question1;