import {
    REQUEST_NHC_DETAILS,
    RECEIVE_NHC_DETAILS_SUCCESS,
    RECEIVE_NHC_DETAILS_ERROR,
} from '../../actions/national-health-center/nhc-list-details';

const defaultState = {
    isFetching: false,
    data: [],
    errorMessage: null
};

const NHCListDetails = (state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_NHC_DETAILS:
            return {
                isFetching: true,
                data: [],
                errorMessage: null
            };
        case RECEIVE_NHC_DETAILS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                // data: {
                //     ...state.data,
                //     [action.payload.place_id]: action.payload
                // },
                data: action.payload
            };
        case RECEIVE_NHC_DETAILS_ERROR:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
        default:
            return state;
    }
};

export default NHCListDetails;