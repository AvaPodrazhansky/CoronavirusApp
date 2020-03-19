import {combineReducers} from 'redux';
import currentCasesUS from './current-cases-us';

const dashboard = combineReducers({
    currentCasesUS
});

export default dashboard;