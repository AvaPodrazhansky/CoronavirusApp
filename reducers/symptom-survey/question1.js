import {
    SET_LOCATION
} from "../../actions/symptom-survey/question1";

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
        default:
            return state;
    }
};

export default question1;