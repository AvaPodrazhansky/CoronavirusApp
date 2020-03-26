import {combineReducers} from 'redux';
import symptomSurvey from './symptom-survey'
import summaryMap from './summary-map';
import dashboard from './dashboard';
import nationalHealthCenter from './national-health-center'
import user from './user'

const allReducers = combineReducers({
    symptomSurvey,
    summaryMap,
    dashboard,
    nationalHealthCenter,
    user
});

export default allReducers;