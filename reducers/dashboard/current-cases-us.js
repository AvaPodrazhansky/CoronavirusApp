import {
    SET_IS_FETCHING_CURRENT_CASES_US,
    RECEIVE_CURRENT_CASE_US_DATA_SUCCESS,
    RECEIVE_CURRENT_CASE_US_DATA_ERROR,
} from '../../actions/dashboard/current-cases-us';

const defaultState = {
    isFetching: false,
    data: [],
    error: null
};

const currentCasesUS = (state = defaultState, action) => {
    switch (action.type) {
        case SET_IS_FETCHING_CURRENT_CASES_US:
            return {
                ...state,
                isFetching: action.payload,
                error: null
            };
        case RECEIVE_CURRENT_CASE_US_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload[0]
            };
        case RECEIVE_CURRENT_CASE_US_DATA_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default currentCasesUS;