const SET_IS_FETCHING_CURRENT_CASES_US = 'SET_IS_FETCHING_CURRENT_CASES_US';
const setIsFetchingCurrentCasesUS = value => {
    return {
        type: SET_IS_FETCHING_CURRENT_CASES_US,
        payload: value
    }
};

const RECEIVE_CURRENT_CASE_US_DATA_SUCCESS = 'RECEIVE_CURRENT_CASE_US_DATA_SUCCESS';
const receiveCurrentCaseUSDataSuccess = data => {
    return {
        type: RECEIVE_CURRENT_CASE_US_DATA_SUCCESS,
        payload: data
    }
};

const RECEIVE_CURRENT_CASE_US_DATA_ERROR = 'RECEIVE_CURRENT_CASE_US_DATA_ERROR';
const receiveCurrentCaseUSDataError = error => {
    return {
        type: RECEIVE_CURRENT_CASE_US_DATA_ERROR,
        payload: error
    }
};

function fetchCurrentDataUS() {
    return async dispatch => {
        dispatch(setIsFetchingCurrentCasesUS(true));
        return await fetch('https://covidtracking.com/api/us')
            .then(res => res.json())
            .then(res => dispatch(receiveCurrentCaseUSDataSuccess(res)))
            .catch(err => dispatch(receiveCurrentCaseUSDataError(err))) //TODO: have error do something
    }
}

export {
    SET_IS_FETCHING_CURRENT_CASES_US,
    setIsFetchingCurrentCasesUS,
    RECEIVE_CURRENT_CASE_US_DATA_SUCCESS,
    receiveCurrentCaseUSDataSuccess,
    RECEIVE_CURRENT_CASE_US_DATA_ERROR,
    receiveCurrentCaseUSDataError,
    fetchCurrentDataUS
}