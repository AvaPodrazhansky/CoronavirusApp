import {combineReducers} from 'redux';
import symptoms from './symptoms'

const symptomSurvey = combineReducers({
    symptoms
});

export default symptomSurvey;