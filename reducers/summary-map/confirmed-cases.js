import {SET_REGION} from '../../actions/summary-map/map-regions';

const defaultState = {
};

const confirmedCases = (state = defaultState, action) => {
    switch (action.type) {
        case SET_REGION:
            return {
                ...state,
                region: action.payload
            };
        default:
            return state;
    }
};

export default confirmedCases;