import {combineReducers} from 'redux';
import mapRegions from "./map-regions";
import confirmedCases from './confirmed-cases';

const summaryMap = combineReducers({
    mapRegions,
    confirmedCases
});

export default summaryMap;