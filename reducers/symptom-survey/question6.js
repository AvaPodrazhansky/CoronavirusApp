import {
    SET_AGE
} from "../../actions/symptom-survey/question6";

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
        default:
            return state;
    }
};

export default question6;