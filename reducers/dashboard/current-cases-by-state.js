import {
    SET_IS_FETCHING_CURRENT_CASES_BY_STATE,
    RECEIVE_CURRENT_CASE_BY_STATE_DATA_SUCCESS,
    RECEIVE_CURRENT_CASE_BY_STATE_DATA_ERROR,
} from '../../actions/dashboard/current-cases-by-state';

const defaultState = {
    isFetching: false,
    data: {},
    error: null
};

const currentCasesByState = (state = defaultState, action) => {
    switch (action.type) {
        case SET_IS_FETCHING_CURRENT_CASES_BY_STATE:
            return {
                ...state,
                isFetching: action.payload,
                error: null
            };
        case RECEIVE_CURRENT_CASE_BY_STATE_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload[0]
            };
        case RECEIVE_CURRENT_CASE_BY_STATE_DATA_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default currentCasesByState;