import {
    QUESTION_TWO_ANSWER_ONE,
    QUESTION_TWO_ANSWER_TWO,
    QUESTION_TWO_ANSWER_THREE,
    QUESTION_TWO_ANSWER_FOUR,
    QUESTION_TWO_ANSWER_FIVE,
    QUESTION_TWO_ANSWER_SIX,
    QUESTION_TWO_ANSWER_SEVEN,
    QUESTION_TWO_ANSWER_EIGHT,
    QUESTION_TWO_ANSWER_NINE,
    QUESTION_TWO_ANSWER_TEN,
    QUESTION_TWO_ANSWER_ELEVEN,
    QUESTION_TWO_ANSWER_TWELVE
} from "../../actions/symptom-survey/question2";

const defaultState = {
    questionTwoAnswerOne: false,
    questionTwoAnswerTwo: false,
    questionTwoAnswerThree: false,
    questionTwoAnswerFour: false,
    questionTwoAnswerFive: false,
    questionTwoAnswerSix: false,
    questionTwoAnswerSeven: false,
    questionTwoAnswerEight: false,
    questionTwoAnswerNine: false,
    questionTwoAnswerTen: false,
    questionTwoAnswerEleven: false,
    questionTwoAnswerTwelve: false
};

const question2 = (state = defaultState, action) => {
    switch (action.type) {
        case QUESTION_TWO_ANSWER_ONE:
            console.log(QUESTION_TWO_ANSWER_ONE);
            return {
                ...state,
                questionTwoAnswerOne: !state.questionTwoAnswerOne
            };
        case QUESTION_TWO_ANSWER_TWO:
            return {
                ...state,
                questionTwoAnswerTwo: !state.questionTwoAnswerTwo
            };
        case QUESTION_TWO_ANSWER_THREE:
            return {
                ...state,
                questionTwoAnswerThree: !state.questionTwoAnswerThree
            };
        case QUESTION_TWO_ANSWER_FOUR:
            return {
                ...state,
                questionTwoAnswerFour: !state.questionTwoAnswerFour
            };
        case QUESTION_TWO_ANSWER_FIVE:
            return {
                ...state,
                questionTwoAnswerFive: !state.questionTwoAnswerFive
            };
        case QUESTION_TWO_ANSWER_SIX:
            return {
                ...state,
                questionTwoAnswerSix: !state.questionTwoAnswerSix
            };
        case QUESTION_TWO_ANSWER_SEVEN:
            return {
                ...state,
                questionTwoAnswerSeven: !state.questionTwoAnswerSeven
            };
        case QUESTION_TWO_ANSWER_EIGHT:
            return {
                ...state,
                questionTwoAnswerEight: !state.questionTwoAnswerEight
            };
        case QUESTION_TWO_ANSWER_NINE:
            return {
                ...state,
                questionTwoAnswerNine: !state.questionTwoAnswerNine
            };
        case QUESTION_TWO_ANSWER_TEN:
            console.log(action.payload);
            return {
                ...state,
                questionTwoAnswerTen: !state.questionTwoAnswerTen
            };
        case QUESTION_TWO_ANSWER_ELEVEN:
            return {
                ...state,
                questionTwoAnswerEleven: !state.questionTwoAnswerEleven
            };
        case QUESTION_TWO_ANSWER_TWELVE:
            return {
                ...state,
                questionTwoAnswerTwelve: !state.questionTwoAnswerTwelve
            };
        default:
            return state;
    }
};

export default question2;