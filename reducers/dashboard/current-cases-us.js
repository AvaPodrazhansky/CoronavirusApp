import {
    SET_IS_FETCHING_CURRENT_CASES_US,
    RECEIVE_CURRENT_CASE_US_DATA_SUCCESS,
    RECEIVE_CURRENT_CASE_US_DATA_ERROR,
    SET_FOCUSED_CASE_TYPE
} from '../../actions/dashboard/current-cases-us';
import {CONFIRMED_TYPE} from '../../constants/constant-list';

const defaultState = {
    isFetching: false,
    data: {},
    error: null,
    focusedCaseType: CONFIRMED_TYPE
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
                data: action.payload
            };
        case RECEIVE_CURRENT_CASE_US_DATA_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case SET_FOCUSED_CASE_TYPE:
            return {
                ...state,
                focusedCaseType: action.payload
            };
        default:
            return state;
    }
};

export default currentCasesUS;