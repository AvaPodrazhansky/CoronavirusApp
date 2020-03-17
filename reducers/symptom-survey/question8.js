import {
    QUESTION_EIGHT_ANSWER_ONE,
    QUESTION_EIGHT_ANSWER_TWO,
    QUESTION_EIGHT_ANSWER_THREE,
    QUESTION_EIGHT_ANSWER_FOUR,
    QUESTION_EIGHT_ANSWER_FIVE,
    QUESTION_EIGHT_ANSWER_SIX,
    QUESTION_EIGHT_ANSWER_SEVEN,
    QUESTION_EIGHT_ANSWER_EIGHT,
    QUESTION_EIGHT_ANSWER_NINE
} from "../../actions/symptom-survey/question8";

const defaultState = {
    question8Answer1: false,
    question8Answer2: false,
    question8Answer3: false,
    question8Answer4: false,
    question8Answer5: false,
    question8Answer6: false,
    question8Answer7: false,
    question8Answer8: false,
    question8Answer9: false
};

const question8 = (state = defaultState, action) => {
    switch (action.type) {
        case QUESTION_EIGHT_ANSWER_ONE:
            return {
                ...state,
                question8Answer1: !state.question8Answer1
            };
        case QUESTION_EIGHT_ANSWER_TWO:
            return {
                ...state,
                question8Answer2: !state.question8Answer2
            };
        case QUESTION_EIGHT_ANSWER_THREE:
            return {
                ...state,
                question8Answer3: !state.question8Answer3
            };
        case QUESTION_EIGHT_ANSWER_FOUR:
            return {
                ...state,
                question8Answer4: !state.question8Answer4
            };
        case QUESTION_EIGHT_ANSWER_FIVE:
            return {
                ...state,
                question8Answer5: !state.question8Answer5
            };
        case QUESTION_EIGHT_ANSWER_SIX:
            return {
                ...state,
                question8Answer6: !state.question8Answer6
            };
        case QUESTION_EIGHT_ANSWER_SEVEN:
            return {
                ...state,
                question8Answer7: !state.question8Answer7
            };
        case QUESTION_EIGHT_ANSWER_EIGHT:
            return {
                ...state,
                question8Answer8: !state.question8Answer8
            };
        case QUESTION_EIGHT_ANSWER_NINE:
            return {
                ...state,
                question8Answer9: !state.question8Answer9
            };
        default:
            return state;
    }
};

export default question8;