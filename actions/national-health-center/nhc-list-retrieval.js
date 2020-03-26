// import fetchData from '../../utils/api';

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


const fetchData = () => {

};

function fetchNHCList() {
    return dispatch => {

        const route = 'NULL';

        const params = {};

        dispatch(requestNHCList());
        fetchData(route, params)
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