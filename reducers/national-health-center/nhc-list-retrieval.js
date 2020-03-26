import {
    REQUEST_NHC_LIST,
    RECEIVE_NHC_LIST_SUCCESS,
    RECEIVE_NHC_LIST_ERROR,
} from '../../actions/national-health-center/nhc-list-retrieval';

const defaultState = {
    isFetching: false,
    data: null,
    errorMessage: null
};

const NHCListRetrieval = (state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_NHC_LIST:
            return {
                isFetching: true,
                data: null,
                errorMessage: null
            };
        case RECEIVE_NHC_LIST_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload,
            };
        case RECEIVE_NHC_LIST_ERROR:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
        default:
            return state;
    }
};

export default NHCListRetrieval;