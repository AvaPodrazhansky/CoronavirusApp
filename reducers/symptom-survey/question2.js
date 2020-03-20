import {TOGGLE_QUESTION_TWO_ANSWER} from "../../actions/symptom-survey/question2";
import {question2AnswerArray} from '../../constants/constant-list';

const defaultState = {
    answerStatuses: Array.apply(false, Array(question2AnswerArray.length)) // initilizing array of
    // answerArrayLegnth of false values
};

const question2 = (state = defaultState, action) => {
    switch (action.type) {
        case TOGGLE_QUESTION_TWO_ANSWER:
            return {
                ...state,
                answerStatuses: _toggleArrayIndex(state.answerStatuses, action.payload)
            };
        default:
            return state;
    }
};


function _toggleArrayIndex(array, index){
    let result = [...array]; // Copy array
    result[index] = !array[index]; // Toggle index boolean value
    return result;
}

export default question2;