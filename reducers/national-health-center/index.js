import {combineReducers} from 'redux';
import NHCListRetrieval from './nhc-list-retrieval';
import NHCListDetails from './nhc-list-details';

const nationalHealthCenter = combineReducers({
    NHCListRetrieval,
    NHCListDetails
});

export default nationalHealthCenter;