import {
    QUESTION_FIVE_ANSWER_ONE,
    QUESTION_FIVE_ANSWER_TWO,
    QUESTION_FIVE_ANSWER_THREE,
    QUESTION_FIVE_ANSWER_FOUR,
    QUESTION_FIVE_ANSWER_FIVE
} from "../../actions/symptom-survey/question5";

const defaultState = {
    questionFiveAnswerOne: false,
    questionFiveAnswerTwo: false,
    questionFiveAnswerThree: false,
    questionFiveAnswerFour: false,
    questionFiveAnswerFive: false
};

const question5 = (state = defaultState, action) => {
    switch (action.type) {
        case QUESTION_FIVE_ANSWER_ONE:
            return {
                ...state,
                questionFiveAnswerOne: !state.questionFiveAnswerOne
            };
        case QUESTION_FIVE_ANSWER_TWO:
            return {
                ...state,
                questionFiveAnswerTwo: !state.questionFiveAnswerTwo
            };
        case QUESTION_FIVE_ANSWER_THREE:
            return {
                ...state,
                questionFiveAnswerThree: !state.questionFiveAnswerThree
            };
        case QUESTION_FIVE_ANSWER_FOUR:
            return {
                ...state,
                questionFiveAnswerFour: !state.questionFiveAnswerFour
            };
        case QUESTION_FIVE_ANSWER_FIVE:
            return {
                ...state,
                questionFiveAnswerFive: !state.questionFiveAnswerFive
            };
        default:
            return state;
    }
};

export default question5;