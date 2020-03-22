function submitSurvey() {
    return (dispatch, getState) => {
        const state = getState();
        console.log(state);
    };
}

export {
    submitSurvey
}