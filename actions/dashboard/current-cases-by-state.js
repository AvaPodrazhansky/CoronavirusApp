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
    // return async dispatch => {
    //     console.log('here')
    //     dispatch(setIsFetchingCurrentCasesByState(true));
    //     return await fetch('https://covidtracking.com/api/states')
    //         .then(res => {
    //             return res.json()
    //         })
    //         .then(res => dispatch(receiveCurrentCaseByStateDataSuccess(res)))
    //         .catch(err => dispatch(receiveCurrentCaseByStateDataError(err))) //TODO: have error do something
    // }

    const route = 'us_data';
    const params = {};

    // let maxConfirmed = 0;
    // let maxDeaths = 0;
    // let maxRecovered = 0;

    return async dispatch => {
        dispatch(setIsFetchingCurrentCasesByState(true));
        return await fetchData(route, params)
            .then(res => res.output[0])
            // .then(res => {
            //     console.log(res)
            //     return res
            // })
            // .then(res => res.map(item => {
            //     console.log(item)
            //     // if (statePopulations[item.state] !== undefined) {
            //
            //
            //         maxConfirmed = max(maxConfirmed, Number(item.confirmed));
            //         maxDeaths = max(maxDeaths, Number(item.deaths));
            //         maxRecovered = max(maxRecovered, Number(item.recovered));
            //         // console.log(item);
            //         return ({
            //             ...item,
            //             confirmed: Number(item.confirmed),
            //             deaths: Number(item.deaths),
            //             recovered: Number(item.recovered)
            //         });
            //     // }
            //     // else {
            //     //     return null;
            //     // }
            // }))
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