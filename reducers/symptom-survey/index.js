import {combineReducers} from 'redux';
import question1 from './question1'
import question2 from './question2'
import question3 from './question3'
import question4 from './question4'
import question5 from './question5'
import question6 from './question6'
import question7 from './question7'
import question8 from './question8'
import surveyResults from './surveyResults';

const symptomSurvey = combineReducers({
    question1,
    question2,
    //question3,
    //question4,
    //question5,
    question6,
    question7,
    question8,
    surveyResults
});

export default symptomSurvey;