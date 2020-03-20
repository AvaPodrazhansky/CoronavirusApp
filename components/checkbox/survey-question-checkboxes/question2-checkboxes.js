import React from "react";
import {connect} from "react-redux";
import CheckBox from './index';
import {
    elevatedBodyTemperaturePressed,
    extremeFatiguePressed,
    symptomChillsPressed,
    soreThroatPressed,
    coughingPressed,
    shortnessOfBreathPressed,
    diarrheaPressed,
    conjunctivitisPressed,
    feelingFlusteredPressed,
    persistentHeadachePressed,
    decreasedSweatingPressed,
    notListedAbovePressed, toggleQuestionTwoAnswer
} from '../../../actions/symptom-survey/question2';
import {getQuestionTwoAnswerOne, getQuestionTwoAnswerStatuses} from "../../../selectors/symptom-survey/question2";
import {View, Text} from 'react-native';
import {question2AnswerArray, QUESTION_TWO} from "../../../constants/constant-list";

const QuestionTwo = ({answer1IsChecked, answerStatuses, toggleAnswer
                         // toggleAnswer1, toggleAnswer2, toggleAnswer3, toggleAnswer4, toggleAnswer5, toggleAnswer6,
                         //                          // toggleAnswer7,
                         //                          // toggleAnswer8,
                         //                          // toggleAnswer9,
                         //                          // toggleAnswer10,
                         //                          // toggleAnswer11,
                         //                          // toggleAnswer12
}) => {

    // const answerStatusesArray = Object.values(answerStatuses);

    // const toggleAnswers = () => [toggleAnswer1, toggleAnswer2, toggleAnswer3, toggleAnswer4, toggleAnswer5, toggleAnswer6,
    //     toggleAnswer7,
    //     toggleAnswer8,
    //     toggleAnswer9,
    //     toggleAnswer10,
    //     toggleAnswer11,
    //     toggleAnswer12]
    console.log(answerStatuses)
    return (
        <View>
            <Text>{QUESTION_TWO}</Text>
            {
                question2AnswerArray.map((answer, index) => (
                    <CheckBox isChecked={answerStatuses[index]}
                              toggleCheck={() => toggleAnswer(index)}
                              title={answer}/>
                ))
            }
        </View>
    )
};

// QuestionTwo.propTypes = {
//     elevatedBodyTemperaturePressed: PropTypes.func.isRequired
// };

const mapStateToProps = state => ({
    answer1IsChecked: getQuestionTwoAnswerOne(state),
    answerStatuses: getQuestionTwoAnswerStatuses(state)
});

const mapDispatchToProps = dispatch => ({
    toggleAnswer1: () => dispatch(elevatedBodyTemperaturePressed()),
    toggleAnswer2: () => dispatch(extremeFatiguePressed),
    toggleAnswer3: () => dispatch(symptomChillsPressed),
    toggleAnswer4: () => dispatch(soreThroatPressed),
    toggleAnswer5: () => dispatch(coughingPressed),
    toggleAnswer6: () => dispatch(shortnessOfBreathPressed),
    toggleAnswer7: () => dispatch(diarrheaPressed),
    toggleAnswer8: () => dispatch(conjunctivitisPressed),
    toggleAnswer9: () => dispatch(feelingFlusteredPressed),
    toggleAnswer10: () => dispatch(persistentHeadachePressed),
    toggleAnswer11: () => dispatch(decreasedSweatingPressed),
    toggleAnswer12: () => dispatch(notListedAbovePressed),
    toggleAnswer: index => dispatch(toggleQuestionTwoAnswer(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTwo);