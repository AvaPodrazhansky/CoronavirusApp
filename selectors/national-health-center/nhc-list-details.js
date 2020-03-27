const isFetchingNHCDetailsSelector = state => state.nationalHealthCenter.NHCListDetails.isFetching;

const getNHCDetailsData = state => state.nationalHealthCenter.NHCListDetails.data;

const getNHCDetailsErrorMessage = state => state.nationalHealthCenter.NHCListDetails.errorMesssage;

export {
    isFetchingNHCDetailsSelector,
    getNHCDetailsData,
    getNHCDetailsErrorMessage
}