import {fetchGoogleData} from '../../constants/api';

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

function fetchNHCDetails(id) {
    const route = 'https://maps.googleapis.com/maps/api/place/details/json?';

    const params = {
        place_id: id,
        fields: 'place_id,name,rating,formatted_phone_number,url,opening_hours,geometry,vicinity'
    };

    return fetchGoogleData(route, params)
        .then(res => res.result);
    // TODO: Add catch


}

function fetchNHCListDetails(NHCList) {
    return async dispatch => {

        dispatch(requestNHCDetails());

        let result = await Promise.all(NHCList.map(item => fetchNHCDetails(item.place_id)));

        dispatch((receiveNHCDetailsSuccess(result)))
        // TODO: Somehow add catch
        // .catch(err => dispatch(receiveNHCDetailsError(err)))
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