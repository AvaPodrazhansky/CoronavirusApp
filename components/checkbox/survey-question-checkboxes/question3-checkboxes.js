import React from "react";
import {connect} from "react-redux";
import CheckBox from './index';
import {View, Text} from 'react-native';
import {QUESTION_THREE, QUESTION_THREE_BUTTON_YES, QUESTION_THREE_BUTTON_NO} from "../../../constants/constant-list";
import PropTypes from 'prop-types';
import {visitedForeignCountriesPressed} from "../../../actions/symptom-survey/question3";
import {getVisitedForeignCountries} from "../../../selectors/symptom-survey/question3";

const QuestionThreeCheckbox = ({visitedForeignCountriesChecked, toggleAnswer}) => {
    return (
        <View>
            <Text>{QUESTION_THREE}</Text>
            <CheckBox isChecked={(visitedForeignCountriesChecked === true)}
                      toggleCheck={() => toggleAnswer(true)}
                      title={QUESTION_THREE_BUTTON_YES}
            />
            <CheckBox isChecked={(visitedForeignCountriesChecked === false)}
                      toggleCheck={() => toggleAnswer(false)}
                      title={QUESTION_THREE_BUTTON_NO}
            />
        </View>
    )
};

QuestionThreeCheckbox.propTypes = {
    toggleAnswer: PropTypes.func.isRequired,
    visitedForeignCountriesChecked: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    visitedForeignCountriesChecked: getVisitedForeignCountries(state)
});

const mapDispatchToProps = dispatch => ({
    toggleAnswer: value => dispatch(visitedForeignCountriesPressed(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionThreeCheckbox);