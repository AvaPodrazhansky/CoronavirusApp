const getIsFetchingCurrentCasesByState = state => state.dashboard.currentCasesByState.isFetching;

const getCurrentCasesByStateData = state => state.dashboard.currentCasesByState.data;

const getCurrentCasesByStateError = state => state.dashboard.currentCasesByState.error;

const getMaxConfirmedValue = state => state.dashboard.currentCasesByState.maxConfirmedValue;

const getMaxDeathValue = state => state.dashboard.currentCasesByState.maxDeathValue;

const getMaxRecoveredValue = state => state.dashboard.currentCasesByState.maxRecoveredValue;

export {
    getIsFetchingCurrentCasesByState,
    getCurrentCasesByStateData,
    getCurrentCasesByStateError,
    getMaxConfirmedValue,
    getMaxDeathValue,
    getMaxRecoveredValue
};