import {REQUEST_DATA, RECEIVE_DATA_SUCCESS, RECEIVE_DATA_ERROR} from "../../actions/news/latest-news";

const defaultState = {
    isFetching: false,
    data: [],
    errorMessage: null
};

const latestNews = (state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_DATA:
            return {
                isFetching: true,
                data: [],
                errorMessage: null
            };
        case RECEIVE_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload,
            };
        case RECEIVE_DATA_ERROR:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
        default:
            return state;
    }
};

export default latestNews;
