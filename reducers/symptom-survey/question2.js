import {TOGGLE_QUESTION_TWO_ANSWER} from "../../actions/symptom-survey/question2";
import {questionTwoAnswerArray} from '../../constants/constant-list';
import {RESET_SURVEY} from "../../actions/symptom-survey/submit-survey";

const defaultState = {
    questionTwoAnswerStatuses: Array.apply(false, Array(questionTwoAnswerArray.length)) // initializing array
    // of answerArrayLength of false values
};

const question2 = (state = defaultState, action) => {
    switch (action.type) {
        case TOGGLE_QUESTION_TWO_ANSWER:
            return {
                ...state,
                questionTwoAnswerStatuses: toggleArrayIndex(state.questionTwoAnswerStatuses, action.payload)
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

export default question2;