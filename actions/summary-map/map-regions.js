// import fetchData from '../../utils/api';
// import {
//     getEmail,
//     getErrors,
//     getFirstName,
//     getLastName,
//     getPassword,
//     getUserType
// } from '../../selectors/home-page/sign-in-auth';
// import signInAuth from "../../reducers/home-page/sign-in-auth";
//

const SET_REGION = 'SET_REGION';
const setRegion = region => {
    return {
        type: SET_REGION,
        payload: region
    }
};

export {
    SET_REGION,
    setRegion
}