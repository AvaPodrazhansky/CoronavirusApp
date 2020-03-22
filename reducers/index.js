import {combineReducers} from 'redux';
import symptomSurvey from './symptom-survey'
import summaryMap from './summary-map';
import dashboard from './dashboard';

const allReducers = combineReducers({
    symptomSurvey,
    summaryMap,
    dashboard
});

export default allReducers;