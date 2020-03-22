const TOGGLE_QUESTION_EIGHT_ANSWER = 'TOGGLE_QUESTION_EIGHT_ANSWER';
const toggleQuestionEightAnswer = answerIndex => {
    return {
        type: TOGGLE_QUESTION_EIGHT_ANSWER,
        payload: answerIndex
    }
};

export {
    TOGGLE_QUESTION_EIGHT_ANSWER,
    toggleQuestionEightAnswer
}