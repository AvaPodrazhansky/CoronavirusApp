import {combineReducers} from 'redux';
import symptomSurvey from './symptom-survey'
import summaryMap from './summary-map';
import dashboard from './dashboard';
import nationalHealthCenter from './national-health-center'
import user from './user'
import news from "./news";

const allReducers = combineReducers({
    symptomSurvey,
    summaryMap,
    dashboard,
    nationalHealthCenter,
    news,
    user
});

export default allReducers;
