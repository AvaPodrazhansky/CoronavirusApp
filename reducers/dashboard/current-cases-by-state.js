import {
    RECEIVE_CURRENT_CASE_BY_STATE_DATA_ERROR,
    RECEIVE_CURRENT_CASE_BY_STATE_DATA_SUCCESS,
    SET_IS_FETCHING_CURRENT_CASES_BY_STATE,
} from '../../actions/dashboard/current-cases-by-state';

const defaultState = {
    isFetching: false,
    data: [],
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
                // data: _formatData(action.payload)
                data: action.payload
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

export default currentCasesByState;