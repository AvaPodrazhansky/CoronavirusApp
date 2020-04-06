import {fetchData} from "../../constants/api";
import {statePopulations} from "../../constants/constant-list";

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

    const route = 'us_data';
    const params = {};

    return async dispatch => {
        dispatch(setIsFetchingCurrentCasesByState(true));
        return await fetchData(route, params)
            .then(res => res.output[0])
            .then(res => res.filter(item => statePopulations[item.state] !== undefined))
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