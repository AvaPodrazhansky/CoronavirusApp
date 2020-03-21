const SET_LOCATION = 'SET_LOCATION';
const setLocation = location => {
    return {
        type: SET_LOCATION,
        payload: location
    }
};

export {
    SET_LOCATION,
    setLocation
}