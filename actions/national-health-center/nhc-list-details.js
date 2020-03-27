import {fetchGoogleData} from '../../constants/api';
import {getUserLocationData} from "../../selectors/user/user-location-retrieval";
import {setRegion} from "../summary-map/map-regions";
import {getNHCListData} from "../../selectors/national-health-center/nhc-list-retrieval";

const REQUEST_NHC_DETAILS = 'REQUEST_NHC_DETAILS';
const requestNHCDetails = () => {
    return {
        type: REQUEST_NHC_DETAILS
    }
};

const RECEIVE_NHC_DETAILS_SUCCESS = 'RECEIVE_NHC_DETAILS_SUCCESS';
const receiveNHCDetailsSuccess = data => {
    return {
        type: RECEIVE_NHC_DETAILS_SUCCESS,
        payload: data
    }
};

const RECEIVE_NHC_DETAILS_ERROR = 'RECEIVE_NHC_DETAILS_ERROR';
const receiveNHCDetailsError = error => {
    return {
        type: RECEIVE_NHC_DETAILS_ERROR,
        payload: error
    }
};

// async function fetchPlaceData(item) {
//     return await fetchGoogleData('https://maps.googleapis.com/maps/api/place/details/json?', {place_id: item.id})
//         .then(res => res.result)
//         .then(res => (
//             {
//                 ...item,
//                 phone: res.formatted_phone_number,
//                 url: res.url
//             }
//         ))
// }

async function fetchNHCDetails(id) {
    const route = 'https://maps.googleapis.com/maps/api/place/details/json?';

    const params = {
        place_id: id,
        fields: 'place_id,name,rating,formatted_phone_number,url,opening_hours,geometry,vicinity'
    };

    return await fetchGoogleData(route, params)
        .then(res => res.result)
    // TODO: Add catch

    return result;

}

function fetchNHCListDetails() {
    return async (dispatch, getState) => {

        dispatch(requestNHCDetails());

        const state = getState();

        const NHCList = getNHCListData(state);

        return await Promise.all(NHCList.map(item => fetchNHCDetails(item.place_id)))
            .then(res => {
                console.log(res);
                return res;
            })
            .then(res => dispatch(receiveNHCDetailsSuccess(res)))
            .catch(err => dispatch(receiveNHCDetailsError(err)))
    }
}

export {
    REQUEST_NHC_DETAILS,
    requestNHCDetails,
    RECEIVE_NHC_DETAILS_SUCCESS,
    receiveNHCDetailsSuccess,
    RECEIVE_NHC_DETAILS_ERROR,
    receiveNHCDetailsError,
    fetchNHCDetails,
    fetchNHCListDetails
}