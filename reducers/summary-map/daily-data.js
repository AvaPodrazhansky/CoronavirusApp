import {
    REQUEST_DAILY_DATA,
    RECEIVE_DAILY_DATA_SUCCESS,
    RECEIVE_DAILY_DATA_ERROR,
} from '../../actions/summary-map/daily-data';
import * as React from "react";

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
                data: _formatResult(action.payload)
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


function _splitArray(array) {
    array = array.map(item => {
        let result = item.split('\"');
        if (result.length > 1) {
            let temp = result.pop();
            temp = temp.split(',').slice(1);
            return result.concat(temp);
        } else {
            return item.split(',')
        }
    });
    array.pop();
    return array;
}

function _formatArrayDisasterToActualUsableJavascriptObject(array) {
    return array.map(item => ({
        provinceOrState: item[0],
        countryOrRegion: item[1],
        lastUpdate: item[2],
        confirmed: Number(item[3]),
        deaths: Number(item[4]),
        recovered: Number(item[5]),
        latitude: Number(item[6]),
        longitude: Number(item[7])
    }))
}

function _formatResult(result) {
    let temp = result.split('\n');
    temp = _splitArray(temp);
    return _formatArrayDisasterToActualUsableJavascriptObject(temp).splice(1)
}

export default dailyData;