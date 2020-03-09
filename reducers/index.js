import {combineReducers} from 'redux';
import symptomSurvey from './symptom-survey'

// const allReducers = (state = {count: 1}, action) => {
//     switch (action.type) {
//         default:
//             return state;
//     }
// };

const allReducers = combineReducers({
    symptomSurvey
});

export default allReducers;