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


async function fetchData() {
    // return fetch(request,
    //     {
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         method: 'post',
    //         body: JSON.stringify(params)
    //     })
    //     .then(res => {
    //         if (res.status !== 200) {
    //             return Promise.reject(res);
    //         }
    //         return res;
    //     })
    //     .then(res => res.json())
    console.log('fetchData')
    return await fetch('https://maps.googleapis.com/maps/api/place/textsearch/json?query=national health center&' +
        'location=42.3675294,-71.186966&radius=10000&key=AIzaSyCSRIA9zqC3h-08MF1M28f2UQjCwGwOkFY')
        // .then(res => res.json())
        .then(res => {
            console.log(res)
            return res
        })
        .then(res => res.json())
};

function fetchNHCList() {
    return async dispatch => {

        // const route = 'https://maps.googleapis.com/maps/api/place/textsearch/json?';
        //
        // const params = {
        //     query: 'National Health Centers',
        //     location: '42.3675294,-71.186966',
        //     radius: '1000',
        //     key: 'AIzaSyCSRIA9zqC3h-08MF1M28f2UQjCwGwOkFY'
        // };

        dispatch(requestNHCList());
        return await fetch('https://maps.googleapis.com/maps/api/place/textsearch/json?query=national health center&' +
            'location=42.3675294,-71.186966&radius=10000&key=AIzaSyCSRIA9zqC3h-08MF1M28f2UQjCwGwOkFY')
            .then(res => res.json())
            .then(res => res.results)
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