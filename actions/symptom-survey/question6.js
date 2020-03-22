const SET_AGE = 'SET_AGE';
const setAge = age => {
    return {
        type: SET_AGE,
        payload: age
    }
};

export {
    SET_AGE,
    setAge
}