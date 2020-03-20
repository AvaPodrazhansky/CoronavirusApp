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
    QUESTION_TWO_ANSWER_TWELVE,
    TOGGLE_QUESTION_TWO_ANSWER
} from "../../actions/symptom-survey/question2";

const defaultState = {
    question2Answer1: false,
    question2Answer2: false,
    question2Answer3: false,
    question2Answer4: false,
    question2Answer5: false,
    question2Answer6: false,
    question2Answer7: false,
    question2Answer8: false,
    question2Answer9: false,
    question2Answer10: false,
    question2Answer11: false,
    question2Answer12: false,
    answerStatuses: [false, false,false,false,false,false,false,false,false,false,false,false,]
};
import {question2AnswerArray} from '../../constants/constant-list';
//
// const defaultState = {
//     answerList: new Array(question2AnswerArray.length).map(item => false)
// };

function _toggleArrayIndex(array, index){
    let result = [...array];
    result[index] = !array[index];
    return result;
}

const question2 = (state = defaultState, action) => {
    switch (action.type) {
        case TOGGLE_QUESTION_TWO_ANSWER:
            return {
                ...state,
                answerStatuses: _toggleArrayIndex(state.answerList, action.payload)
            };
        case QUESTION_TWO_ANSWER_ONE:
            return {
                ...state,
                question2Answer1: !state.question2Answer1
            };
        case QUESTION_TWO_ANSWER_TWO:
            return {
                ...state,
                question2Answer2: !state.question2Answer2
            };
        case QUESTION_TWO_ANSWER_THREE:
            return {
                ...state,
                question2Answer3: !state.question2Answer3
            };
        case QUESTION_TWO_ANSWER_FOUR:
            return {
                ...state,
                question2Answer4: !state.question2Answer4
            };
        case QUESTION_TWO_ANSWER_FIVE:
            return {
                ...state,
                question2Answer5: !state.question2Answer5
            };
        case QUESTION_TWO_ANSWER_SIX:
            return {
                ...state,
                question2Answer6: !state.question2Answer6
            };
        case QUESTION_TWO_ANSWER_SEVEN:
            return {
                ...state,
                question2Answer7: !state.question2Answer7
            };
        case QUESTION_TWO_ANSWER_EIGHT:
            return {
                ...state,
                question2Answer8: !state.question2Answer8
            };
        case QUESTION_TWO_ANSWER_NINE:
            return {
                ...state,
                question2Answer9: !state.question2Answer9
            };
        case QUESTION_TWO_ANSWER_TEN:
            console.log(action.payload);
            return {
                ...state,
                question2Answer10: !state.question2Answer10
            };
        case QUESTION_TWO_ANSWER_ELEVEN:
            return {
                ...state,
                question2Answer11: !state.question2Answer11
            };
        case QUESTION_TWO_ANSWER_TWELVE:
            return {
                ...state,
                question2Answer12: !state.question2Answer12
            };
        default:
            return state;
    }
};

export default question2;