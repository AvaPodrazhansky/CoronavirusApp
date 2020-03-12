const SET_SEX = 'SET_SEX';
const setSex = isFemale => {
    return {
        type: SET_SEX,
        payload: isFemale
    }
};

export {
    SET_SEX,
    setSex
}