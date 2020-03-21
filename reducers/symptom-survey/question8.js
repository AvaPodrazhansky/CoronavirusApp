import {TOGGLE_QUESTION_EIGHT_ANSWER} from "../../actions/symptom-survey/question8";
import {questionEightAnswerArray} from "../../constants/constant-list";

const defaultState = {
    questionEightAnswerStatuses: Array.apply(false, Array(questionEightAnswerArray.length)) // initializing
    // array of answerArrayLength of false values
};

const question8 = (state = defaultState, action) => {
    switch (action.type) {
        case TOGGLE_QUESTION_EIGHT_ANSWER:
            return {
                ...state,
                questionEightAnswerStatuses: toggleArrayIndex(state.questionEightAnswerStatuses, action.payload)
            };
        default:
            return state;
    }
};

function toggleArrayIndex(array, index) {
    let result = [...array]; // Copy array
    result[index] = !array[index]; // Toggle index boolean value
    return result;
}

export default question8;