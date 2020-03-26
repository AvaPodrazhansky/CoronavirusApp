import {combineReducers} from 'redux';
import symptomSurvey from './symptom-survey'
import summaryMap from './summary-map';
import dashboard from './dashboard';
import nationalHealthCenter from './national-health-center'

const allReducers = combineReducers({
    symptomSurvey,
    summaryMap,
    dashboard,
    nationalHealthCenter
});

export default allReducers;