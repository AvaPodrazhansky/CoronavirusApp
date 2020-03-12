import {
    SET_SEX
} from "../../actions/symptom-survey/question7";

const defaultState = {
    isFemale: false
};

const question7 = (state = defaultState, action) => {
    switch (action.type) {
        case SET_SEX:
            console.log(action.payload);
            return {
                ...state,
                isFemale: action.payload
            };
        default:
            return state;
    }
};

export default question7;