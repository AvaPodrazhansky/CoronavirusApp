const SET_SEX = 'SET_SEX';
const setSex = sex => {
    return {
        type: SET_SEX,
        payload: sex
    }
};

export {
    SET_SEX,
    setSex
}