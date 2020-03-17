import {
    QUESTION_FIVE_ANSWER_ONE,
    QUESTION_FIVE_ANSWER_TWO,
    QUESTION_FIVE_ANSWER_THREE,
    QUESTION_FIVE_ANSWER_FOUR,
    QUESTION_FIVE_ANSWER_FIVE
} from "../../actions/symptom-survey/question5";

const defaultState = {
    question5Answer1: false,
    question5Answer2: false,
    question5Answer3: false,
    question5Answer4: false,
    question5Answer5: false
};

const question5 = (state = defaultState, action) => {
    switch (action.type) {
        case QUESTION_FIVE_ANSWER_ONE:
            return {
                ...state,
                question5Answer1: !state.question5Answer1
            };
        case QUESTION_FIVE_ANSWER_TWO:
            return {
                ...state,
                question5Answer2: !state.question5Answer2
            };
        case QUESTION_FIVE_ANSWER_THREE:
            return {
                ...state,
                question5Answer3: !state.question5Answer3
            };
        case QUESTION_FIVE_ANSWER_FOUR:
            return {
                ...state,
                question5Answer4: !state.question5Answer4
            };
        case QUESTION_FIVE_ANSWER_FIVE:
            return {
                ...state,
                question5Answer5: !state.question5Answer5
            };
        default:
            return state;
    }
};

export default question5;