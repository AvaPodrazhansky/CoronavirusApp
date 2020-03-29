const REQUEST_DATA = 'REQUEST_DATA';
const requestData = () => {
    return {
        type: REQUEST_DATA
    }
};

const RECEIVE_DATA_SUCCESS = 'RECEIVE_DATA_SUCCESS';
const receiveDataSuccess = data => {
    return {
        type: RECEIVE_DATA_SUCCESS,
        payload: data
    }
};

const RECEIVE_DATA_ERROR = 'RECEIVE_DATA_ERROR';
const receiveDataError = error => {
    return {
        type: RECEIVE_DATA_ERROR,
        payload: error
    }
};

function fetchLatestNews() {
    const d = new Date();
    const date = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
    const url = 'https://newsapi.org/v2/top-headlines?' +
        'sources=nbc-news,cnn,abc-news,fox-news,cbs-news&' +
        'q=coronavirus&' +
        'from=' + date + '&' +
        //'sortBy=popularity&' +
        'apiKey=2d5289762b3b4da791ba70f3fcedd3de';

    return async dispatch => {
        dispatch(requestData);
        let result = await fetch(url)
            .then(res => res.json())
            .then(res => res.articles)
            .then(articles => {
                console.log(articles);
                return articles;
            })
            .then(articles => dispatch(receiveDataSuccess(articles)))
            .catch(err => dispatch(receiveDataError(err)));
        return result;
    }
}

export {
    REQUEST_DATA,
    requestData,
    RECEIVE_DATA_SUCCESS,
    receiveDataSuccess,
    RECEIVE_DATA_ERROR,
    receiveDataError,
    fetchLatestNews
}
