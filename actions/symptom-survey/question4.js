const SET_PUBLIC_TRANSPORTATION = 'SET_PUBLIC_TRANSPORTATION';
const setPublicTransportation = number => {
    return {
        type: SET_PUBLIC_TRANSPORTATION,
        payload: number
    }
};

export {
    SET_PUBLIC_TRANSPORTATION,
    setPublicTransportation
}