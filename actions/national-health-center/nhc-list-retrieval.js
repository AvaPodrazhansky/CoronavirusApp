import {fetchData} from '../../constants/api';
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

        const route = 'healthcare?';

        // const params = {
        //     x: userLocationData.lat,
        //     y: userLocationData.lng
        // };

        // TODO: Update to user location
        const params = {
            x: -84.352672,
            y: 33.991939
        };

        dispatch(requestNHCList());

        // TODO: Add catch if result length is 0
        return await fetchData(route, params)
            .then(res => res.output[0])
            .then(res => {
                // TODO: Set deltas to be relative to results
                dispatch(setRegion({
                    latitude: res[0].y,
                    longitude: res[0].x,
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