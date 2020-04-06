const getIsFetchingCurrentCasesUS = state => state.dashboard.currentCasesUS.isFetching;

const getCurrentCasesUSData = state => state.dashboard.currentCasesUS.data;

const getCurrentCasesUSError = state => state.dashboard.currentCasesUS.error;

const getFocusedCaseType = state => state.dashboard.currentCasesUS.focusedCaseType;

export {
    getIsFetchingCurrentCasesUS,
    getCurrentCasesUSData,
    getCurrentCasesUSError,
    getFocusedCaseType
};