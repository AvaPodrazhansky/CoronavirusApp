const isFetchingSelector = state => state.news.latestNews.isFetching;

const getData = state => state.news.latestNews.data;

const getErrorMessage = state => state.news.latestNews.errorMessage;

export {
    isFetchingSelector,
    getData,
    getErrorMessage
}
