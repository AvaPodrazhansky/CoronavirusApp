import {
    REQUEST_DAILY_DATA,
    RECEIVE_DAILY_DATA_SUCCESS,
    RECEIVE_DAILY_DATA_ERROR,
} from '../../actions/summary-map/daily-data';

const defaultState = {
    isFetching: false,
    data: [],
    errorMessage: null
};

const dailyData = (state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_DAILY_DATA:
            return {
                isFetching: true,
                data: [],
                errorMessage: null
            };
        case RECEIVE_DAILY_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload,
            };
        case RECEIVE_DAILY_DATA_ERROR:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
        default:
            return state;
    }
};

export default dailyData;