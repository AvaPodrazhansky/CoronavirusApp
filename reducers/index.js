import {combineReducers} from 'redux';
import symptomSurvey from './symptom-survey'
import summaryMap from './summary-map';

const allReducers = combineReducers({
    symptomSurvey,
    summaryMap
});

export default allReducers;