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
    questionEightAnswerOne: false,
    questionEightAnswerTwo: false,
    questionEightAnswerThree: false,
    questionEightAnswerFour: false,
    questionEightAnswerFive: false,
    questionEightAnswerSix: false,
    questionEightAnswerSeven: false,
    questionEightAnswerEight: false,
    questionEightAnswerNine: false
};

const question8 = (state = defaultState, action) => {
    switch (action.type) {
        case QUESTION_EIGHT_ANSWER_ONE:
            return {
                ...state,
                questionEightAnswerOne: !state.questionEightAnswerOne
            };
        case QUESTION_EIGHT_ANSWER_TWO:
            return {
                ...state,
                questionEightAnswerTwo: !state.questionEightAnswerTwo
            };
        case QUESTION_EIGHT_ANSWER_THREE:
            return {
                ...state,
                questionEightAnswerThree: !state.questionEightAnswerThree
            };
        case QUESTION_EIGHT_ANSWER_FOUR:
            return {
                ...state,
                questionEightAnswerFour: !state.questionEightAnswerFour
            };
        case QUESTION_EIGHT_ANSWER_FIVE:
            return {
                ...state,
                questionEightAnswerFive: !state.questionEightAnswerFive
            };
        case QUESTION_EIGHT_ANSWER_SIX:
            return {
                ...state,
                questionEightAnswerSix: !state.questionEightAnswerSix
            };
        case QUESTION_EIGHT_ANSWER_SEVEN:
            return {
                ...state,
                questionEightAnswerSeven: !state.questionEightAnswerSeven
            };
        case QUESTION_EIGHT_ANSWER_EIGHT:
            return {
                ...state,
                questionEightAnswerEight: !state.questionEightAnswerEight
            };
        case QUESTION_EIGHT_ANSWER_NINE:
            return {
                ...state,
                questionEightAnswerNine: !state.questionEightAnswerNine
            };
        default:
            return state;
    }
};

export default question8;