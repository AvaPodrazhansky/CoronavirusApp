const isFetchingSelector = state => state.summaryMap.dailyData.isFetching;

const getData = state => state.summaryMap.dailyData.data;

const getErrorMessage = state => state.summaryMap.dailyData.errorMesssage;


export {
    isFetchingSelector,
    getData,
    getErrorMessage
}