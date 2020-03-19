const getIsFetchingCurrentCasesUS = state => state.dashboard.currentCasesUS.isFetching;

const getCurrentCasesUSData = state => state.dashboard.currentCasesUS.data;

const getCurrentCasesUSError = state => state.dashboard.currentCasesUS.error;

export {
    getIsFetchingCurrentCasesUS,
    getCurrentCasesUSData,
    getCurrentCasesUSError
};