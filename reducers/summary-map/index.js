import {combineReducers} from 'redux';
import mapRegions from "./map-regions";

const summaryMap = combineReducers({
    mapRegions
});

export default summaryMap;