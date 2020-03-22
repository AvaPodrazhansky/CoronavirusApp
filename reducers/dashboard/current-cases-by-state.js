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
                data: _formatDataForList(action.payload)
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

const stateDictionary = {
    "AL": "Alabama",
    "AK": "Alaska",
    "AS": "American Samoa",
    "AZ": "Arizona",
    "AR": "Arkansas",
    "CA": "California",
    "CO": "Colorado",
    "CT": "Connecticut",
    "DE": "Delaware",
    "DC": "District Of Columbia",
    "FM": "Federated States Of Micronesia",
    "FL": "Florida",
    "GA": "Georgia",
    "GU": "Guam",
    "HI": "Hawaii",
    "ID": "Idaho",
    "IL": "Illinois",
    "IN": "Indiana",
    "IA": "Iowa",
    "KS": "Kansas",
    "KY": "Kentucky",
    "LA": "Louisiana",
    "ME": "Maine",
    "MH": "Marshall Islands",
    "MD": "Maryland",
    "MA": "Massachusetts",
    "MI": "Michigan",
    "MN": "Minnesota",
    "MS": "Mississippi",
    "MO": "Missouri",
    "MT": "Montana",
    "NE": "Nebraska",
    "NV": "Nevada",
    "NH": "New Hampshire",
    "NJ": "New Jersey",
    "NM": "New Mexico",
    "NY": "New York",
    "NC": "North Carolina",
    "ND": "North Dakota",
    "MP": "Northern Mariana Islands",
    "OH": "Ohio",
    "OK": "Oklahoma",
    "OR": "Oregon",
    "PW": "Palau",
    "PA": "Pennsylvania",
    "PR": "Puerto Rico",
    "RI": "Rhode Island",
    "SC": "South Carolina",
    "SD": "South Dakota",
    "TN": "Tennessee",
    "TX": "Texas",
    "UT": "Utah",
    "VT": "Vermont",
    "VI": "Virgin Islands",
    "VA": "Virginia",
    "WA": "Washington",
    "WV": "West Virginia",
    "WI": "Wisconsin",
    "WY": "Wyoming"
};

function _formatDataForList(data) {

    return data.map(item => {
        return {
            ...item,
            name: stateDictionary[item.state]
        };
    });
}

export default currentCasesByState;