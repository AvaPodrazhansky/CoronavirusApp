import {SET_REGION} from '../../actions/summary-map/map-regions';

const defaultState = {
    region: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
    }
};

const mapRegions = (state = defaultState, action) => {
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

export default mapRegions;