import {
    REQUEST_USER_LOCATION,
    RECEIVE_USER_LOCATION_SUCCESS,
    RECEIVE_USER_LOCATION_ERROR
} from '../../actions/user/user-location-retrieval';

const defaultState = {
    isFetching: false,
    data: {
        lat: 51.0,
        lng: -0.1
    },
    errorMessage: 'error'
};

const userLocationRetrieval = (state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_USER_LOCATION:
            return {
                isFetching: true,
                data: [],
                errorMessage: null
            };
        case RECEIVE_USER_LOCATION_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload,
            };
        case RECEIVE_USER_LOCATION_ERROR:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
        default:
            return state;
    }
};

export default userLocationRetrieval;