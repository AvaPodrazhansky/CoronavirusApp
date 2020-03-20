import {SET_SEX} from "../../actions/symptom-survey/question7";

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
        default:
            return state;
    }
};

export default question7;