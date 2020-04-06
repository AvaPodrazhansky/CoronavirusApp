import {
    RECEIVE_CURRENT_CASE_BY_STATE_DATA_ERROR,
    RECEIVE_CURRENT_CASE_BY_STATE_DATA_SUCCESS,
    SET_IS_FETCHING_CURRENT_CASES_BY_STATE,
} from '../../actions/dashboard/current-cases-by-state';
import {PERCENTAGE, stateAbbreviations} from "../../constants/constant-list";

const defaultState = {
    isFetching: false,
    data: [],
    error: null,
    maxConfirmedValue: 0,
    maxDeathValue: 0,
    maxRecoveredValue: 0,
    progressBarType: PERCENTAGE
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
            const results = _formatDataForList(action.payload);
            return {
                ...state,
                isFetching: false,
                data: results.data,
                maxConfirmedValue: results.maxConfirmedValue,
                maxDeathValue: results.maxDeathValue,
                maxRecoveredValue: results.maxRecoveredValue
                // data: action.payload
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

function _formatDataForPieChart(data) {

    return data.map(item => {
        return {
            name: item['state'],
            population: item['positive'],
            color: '#777777',
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        };
    }).sort(item => item.population).reverse();
}

function _formatDataForList(data) {

    let maxConfirmed = 0;
    let maxDeaths = 0;
    let maxRecovered = 0;

    const formattedData =  data.map(item => {
        let numericConfirmed = (item.confirmed === 'N/A' ? 0 : Number(item.confirmed));
        let numericDeaths = (item.deaths === 'N/A' ? 0 : Number(item.deaths));
        let numericRecovered = (item.recovered === 'N/A' ? 0 : Number(item.recovered));

        if( numericConfirmed > maxConfirmed) maxConfirmed = numericConfirmed;
        if( numericDeaths > maxDeaths) maxDeaths = numericDeaths;
        if( numericRecovered > maxRecovered) maxRecovered = numericRecovered;

        return {
            ...item,
            name: stateAbbreviations[item.state],
            confirmed: numericConfirmed,
            deaths: numericDeaths,
            recovered: numericRecovered
        };
    });

    return {
        data: formattedData,
        maxConfirmedValue: maxConfirmed,
        maxDeathValue: maxDeaths,
        maxRecoveredValue: maxRecovered
    }
}

export default currentCasesByState;