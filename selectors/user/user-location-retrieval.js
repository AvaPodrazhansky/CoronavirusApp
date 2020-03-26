const isFetchingUserLocationSelector = state => state.user.userLocationRetrieval.isFetching;

const getUserLocationData = state => state.user.userLocationRetrieval.data;

const getUserLocationErrorMessage = state => state.user.userLocationRetrieval.errorMesssage;

export {
    isFetchingUserLocationSelector,
    getUserLocationData,
    getUserLocationErrorMessage
}