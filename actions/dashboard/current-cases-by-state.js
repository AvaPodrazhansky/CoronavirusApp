const SET_IS_FETCHING_CURRENT_CASES_BY_STATE = 'SET_IS_FETCHING_CURRENT_CASES_BY_STATE';
const setIsFetchingCurrentCasesByState = value => {
    return {
        type: SET_IS_FETCHING_CURRENT_CASES_BY_STATE,
        payload: value
    }
};

const RECEIVE_CURRENT_CASE_BY_STATE_DATA_SUCCESS = 'RECEIVE_CURRENT_CASE_BY_STATE_DATA_SUCCESS';
const receiveCurrentCaseByStateDataSuccess = data => {
    return {
        type: RECEIVE_CURRENT_CASE_BY_STATE_DATA_SUCCESS,
        payload: data
    }
};

const RECEIVE_CURRENT_CASE_BY_STATE_DATA_ERROR = 'RECEIVE_CURRENT_CASE_BY_STATE_DATA_ERROR';
const receiveCurrentCaseByStateDataError = error => {
    return {
        type: RECEIVE_CURRENT_CASE_BY_STATE_DATA_ERROR,
        payload: error
    }
};

function fetchCurrentDataByState() {
    return async dispatch => {
        console.log('here')
        dispatch(setIsFetchingCurrentCasesByState(true));
        return await fetch('https://covidtracking.com/api/states')
            .then(res => {
                return res.json()
            })
            .then(res => dispatch(receiveCurrentCaseByStateDataSuccess(res)))
            .catch(err => dispatch(receiveCurrentCaseByStateDataError(err))) //TODO: have error do something
    }
}

export {
    SET_IS_FETCHING_CURRENT_CASES_BY_STATE,
    setIsFetchingCurrentCasesByState,
    RECEIVE_CURRENT_CASE_BY_STATE_DATA_SUCCESS,
    receiveCurrentCaseByStateDataSuccess,
    RECEIVE_CURRENT_CASE_BY_STATE_DATA_ERROR,
    receiveCurrentCaseByStateDataError,
    fetchCurrentDataByState
}