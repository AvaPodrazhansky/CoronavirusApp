import {TOGGLE_QUESTION_FIVE_ANSWER} from "../../actions/symptom-survey/question5";
import {questionFiveAnswerArray} from "../../constants/constant-list";
import {RESET_SURVEY} from "../../actions/symptom-survey/submit-survey";

const defaultState = {
    questionFiveAnswerStatuses: Array.apply(false, Array(questionFiveAnswerArray.length)) // initializing array
    // of answerArrayLength of false values
};

const question5 = (state = defaultState, action) => {
    switch (action.type) {
        case TOGGLE_QUESTION_FIVE_ANSWER:
            return {
                ...state,
                questionFiveAnswerStatuses: toggleArrayIndex(state.questionFiveAnswerStatuses, action.payload)
            };
        case RESET_SURVEY:
            return defaultState;
        default:
            return state;
    }
};

function toggleArrayIndex(array, index) {
    let result = [...array]; // Copy array
    result[index] = !array[index]; // Toggle index boolean value
    return result;
}

export default question5;