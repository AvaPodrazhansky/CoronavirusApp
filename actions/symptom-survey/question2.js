const TOGGLE_QUESTION_TWO_ANSWER = 'TOGGLE_QUESTION_TWO_ANSWER';
const toggleQuestionTwoAnswer = answerIndex => {
    return {
        type: TOGGLE_QUESTION_TWO_ANSWER,
        payload: answerIndex
    }
};

export {
    TOGGLE_QUESTION_TWO_ANSWER,
    toggleQuestionTwoAnswer
}