import {combineReducers} from 'redux';
import mapRegions from "./map-regions";
import confirmedCases from './confirmed-cases';
import dailyData from './daily-data';

const summaryMap = combineReducers({
    mapRegions,
    confirmedCases,
    dailyData
});

export default summaryMap;