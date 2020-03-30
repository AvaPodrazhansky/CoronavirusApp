import {SET_REGION} from '../../actions/summary-map/map-regions';

const defaultState = {
    region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }
};

const mapRegions = (state = defaultState, action) => {
    switch (action.type) {
        case SET_REGION:
            console.log(action.payload)
            return {
                ...state,
                region: action.payload
            };
        default:
            return state;
    }
};

export default mapRegions;