const defaultState = {

};

const symptoms = (state = defaultState, action) => {
    switch (action.type) {
        // case REQUEST_MY_PROJECTS:
        //     return {
        //         isFetching: true,
        //         data: null,
        //         errorMessage: null
        //     };
        // case RECEIVE_MY_PROJECTS_SUCCESS:
        //     return {
        //         ...state,
        //         isFetching: false,
        //         data: action.payload,
        //     };
        // case RECEIVE_MY_PROJECTS_ERROR:
        //     return {
        //         ...state,
        //         isFetching: false,
        //         errorMessage: action.payload
        //     };
        default:
            return state;
    }
};

export default symptoms;