import {INCREMENT, SET_LOCATION} from "../../actions/symptom-survey/symptoms";

const defaultState = {
    count: 0,
    location: ''
};

const symptoms = (state = defaultState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
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

export default symptoms;