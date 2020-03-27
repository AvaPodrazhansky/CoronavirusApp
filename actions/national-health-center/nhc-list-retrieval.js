import {fetchGoogleData} from '../../constants/api';
import {getUserLocationData} from "../../selectors/user/user-location-retrieval";
import {setRegion} from "../summary-map/map-regions";

const REQUEST_NHC_LIST = 'REQUEST_NHC_LIST';
const requestNHCList = () => {
    return {
        type: REQUEST_NHC_LIST
    }
};

const RECEIVE_NHC_LIST_SUCCESS = 'RECEIVE_NHC_LIST_SUCCESS';
const receiveNHCListSuccess = data => {
    return {
        type: RECEIVE_NHC_LIST_SUCCESS,
        payload: data
    }
};

const RECEIVE_NHC_LIST_ERROR = 'RECEIVE_NHC_LIST_ERROR';
const receiveNHCListError = error => {
    return {
        type: RECEIVE_NHC_LIST_ERROR,
        payload: error
    }
};

function fetchNHCList() {
    return async (dispatch, getState) => {

        const state = getState();
        const userLocationData = getUserLocationData(state);

        const route = 'https://maps.googleapis.com/maps/api/place/textsearch/json?';

        const params = {
            query: 'National Health Centers',
            location: userLocationData.lat + ',' + userLocationData.lng,
            radius: '1000'
        };

        dispatch(requestNHCList());

        // TODO: Add catch if result length is 0
        return await fetchGoogleData(route, params)
            .then(res => res.results)
            .then(res => {
                // TODO: Set deltas to be relative to results
                dispatch(setRegion({
                    latitude: res[0].geometry.location.lat,
                    longitude: res[0].geometry.location.lng,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.05,

                }));
                return res;
            })
            .then(res => dispatch(receiveNHCListSuccess(res)))
            .catch(res => dispatch(receiveNHCListError(res)))
    }
}

export {
    REQUEST_NHC_LIST,
    requestNHCList,
    RECEIVE_NHC_LIST_SUCCESS,
    receiveNHCListSuccess,
    RECEIVE_NHC_LIST_ERROR,
    receiveNHCListError,
    fetchNHCList
}