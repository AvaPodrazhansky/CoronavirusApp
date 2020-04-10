import {combineReducers} from 'redux';
import NHCListRetrieval from './nhc-list-retrieval';

const nationalHealthCenter = combineReducers({
    NHCListRetrieval
});

export default nationalHealthCenter;