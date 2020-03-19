import {combineReducers} from 'redux';
import currentCasesUS from './current-cases-us';
import currentCasesByState from './current-cases-by-state';

const dashboard = combineReducers({
    currentCasesUS,
    currentCasesByState
});

export default dashboard;