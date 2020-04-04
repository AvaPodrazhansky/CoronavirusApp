import {getAge} from "../../selectors/symptom-survey/question6";
import {getExposed} from "../../selectors/symptom-survey/question3";
import {getQuestionEightAnswerStatuses} from "../../selectors/symptom-survey/question8";
import {getQuestionTwoAnswerStatuses} from "../../selectors/symptom-survey/question2";

const SHOW_DIAGNOSIS_SCREEN = 'SHOW_DIAGNOSIS_SCREEN';
const showDiagnosisScreen = () => {
    return {
        type: SHOW_DIAGNOSIS_SCREEN,
    }
};

const SHOW_RESULT_SCREEN = 'SHOW_RESULT_SCREEN';
const showResultScreen = () => {
    return {
        type: SHOW_RESULT_SCREEN,
    }
};

const RESET_SURVEY = 'RESET_SURVEY';
const resetSurvey = () => {
    return {
        type: RESET_SURVEY,
    }
};

const SET_DIAGNOSIS = 'SET_DIAGNOSIS';
const setDiagnosis = grade => {
    return {
        type: SET_DIAGNOSIS,
        payload: grade
    }
};

function calculateGrade() {
    return (dispatch, getState) => {
        const state = getState();
        let agePercentage = 0, symptomPercentage = 0, conditionPercentage = 0, contactPercentage = 0;

        // Question 1
        let symptomsArray = getQuestionTwoAnswerStatuses(state);
        for (let symptomsArrayIndex = 0; symptomsArrayIndex < symptomsArray.length - 1; symptomsArrayIndex++) {
            if (symptomsArray[symptomsArrayIndex] === true) {
                switch (symptomsArrayIndex) {
                    case 0:
                        symptomPercentage += 12.4;
                        break;
                    case 1:
                        symptomPercentage += 5.6;
                        break;
                    case 2:
                        symptomPercentage += 10.2;
                        break;
                    case 3:
                        symptomPercentage += 6;
                        break;
                    case 4:
                        symptomPercentage += 9.6;
                        break;
                    case 5:
                        symptomPercentage += 10.8;
                        break;
                    case 8:
                        symptomPercentage += 1.8;
                        break;
                    case 9:
                        symptomPercentage += 1.8;
                        break;
                    default:
                        symptomPercentage += 0.6;
                }
            }
        }

        // Question 2
        if (getExposed(state)) {
            contactPercentage = 20;
        }

        // Question 3
        let age = getAge(state);
        if (age < 45) {
            agePercentage = 1;
        } else if (age >= 45 && age < 55) {
            agePercentage = 6;
        } else if (age >= 55 && age < 65) {
            agePercentage = 7;
        } else if (age >= 65 && age < 75) {
            agePercentage = 8;
        } else if (age >= 75 && age < 85) {
            agePercentage = 9;
        } else if (age >= 85) {
            agePercentage = 10;
        }

        // Question 5
        let conditionsArray = getQuestionEightAnswerStatuses(state);
        for (let conditionArrayIndex = 0; conditionArrayIndex < conditionsArray.length; conditionArrayIndex++) {
            if (conditionsArray[conditionArrayIndex] === true) {
                conditionPercentage += 10 / 9;
            }
        }

        let totalPercentage = symptomPercentage + contactPercentage + agePercentage + conditionPercentage;
        dispatch(setDiagnosis(Math.ceil((totalPercentage) * 100) / 100))
    };
}

function submitSurvey() {
    return dispatch => {
        dispatch(showResultScreen());
        dispatch(calculateGrade());
    };
}

export {
    submitSurvey,
    SHOW_RESULT_SCREEN,
    showResultScreen,
    RESET_SURVEY,
    resetSurvey,
    SHOW_DIAGNOSIS_SCREEN,
    showDiagnosisScreen,
    SET_DIAGNOSIS,
    setDiagnosis
}
