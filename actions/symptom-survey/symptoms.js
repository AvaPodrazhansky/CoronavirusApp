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

const INCREMENT = 'INCREMENT';
const increment = () => {
    return {
        type: INCREMENT,
    }
};

const SET_LOCATION = 'SET_LOCATION';
const setLocation = location => {
    return {
        type: SET_LOCATION,
        payload: location
    }
};

export {
    INCREMENT,
    increment,
    SET_LOCATION,
    setLocation
}