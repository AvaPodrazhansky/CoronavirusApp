const getIsFetchingCurrentCasesByState = state => state.dashboard.currentCasesByState.isFetching;

const getCurrentCasesByStateData = state => state.dashboard.currentCasesByState.data;

const getCurrentCasesByStateError = state => state.dashboard.currentCasesByState.error;

export {
    getIsFetchingCurrentCasesByState,
    getCurrentCasesByStateData,
    getCurrentCasesByStateError
};