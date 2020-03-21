const TOGGLE_QUESTION_FIVE_ANSWER = 'TOGGLE_QUESTION_FIVE_ANSWER';
const toggleQuestionFiveAnswer = answerIndex => {
    return {
        type: TOGGLE_QUESTION_FIVE_ANSWER,
        payload: answerIndex
    }
};

export {
    TOGGLE_QUESTION_FIVE_ANSWER,
    toggleQuestionFiveAnswer
}