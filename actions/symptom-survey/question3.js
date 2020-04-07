const POTENTIALLY_EXPOSED = 'POTENTIALLY_EXPOSED';
const potentiallyExposed = exposed => {
    return {
        type: POTENTIALLY_EXPOSED,
        payload: exposed
    }
};

export {
    POTENTIALLY_EXPOSED,
    potentiallyExposed
}
