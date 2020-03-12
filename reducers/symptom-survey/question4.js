import {
    SET_PUBLIC_TRANSPORTATION
} from "../../actions/symptom-survey/question4";

const defaultState = {
    number: 0
};

const question4 = (state = defaultState, action) => {
    switch (action.type) {
        case SET_PUBLIC_TRANSPORTATION:
            console.log(action.payload);
            return {
                ...state,
                number: action.payload
            };
        default:
            return state;
    }
};

export default question4;