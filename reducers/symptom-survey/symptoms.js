import {INCREMENT} from "../../actions/symptom-survey/symptoms";

const defaultState = {
    count: 0
};

const symptoms = (state = defaultState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        default:
            return state;
    }
};

export default symptoms;