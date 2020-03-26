const isFetchingNHCListSelector = state => state.nationalHealthCenter.NHCListRetrieval.isFetching;

const getNHCListData = state => state.nationalHealthCenter.NHCListRetrieval.data;

const getNHCListErrorMessage = state => state.nationalHealthCenter.NHCListRetrieval.errorMesssage;

export {
    isFetchingNHCListSelector,
    getNHCListData,
    getNHCListErrorMessage
}