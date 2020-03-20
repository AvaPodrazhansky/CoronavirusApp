import React from "react";
import {connect} from "react-redux";
import CheckBox from './index';
import {View, Text} from 'react-native';
import {QUESTION_SEVEN_BUTTON_FEMALE, QUESTION_SEVEN_BUTTON_MALE, QUESTION_SEVEN}
    from "../../../constants/constant-list";
import PropTypes from 'prop-types';
import {setSex} from "../../../actions/symptom-survey/question7";
import {getSex} from "../../../selectors/symptom-survey/question7";

const QuestionSevenCheckbox = ({sexChecked, toggleAnswer}) => {
    return (
        <View>
            <Text>{QUESTION_SEVEN}</Text>
            <CheckBox isChecked={(sexChecked === QUESTION_SEVEN_BUTTON_FEMALE)}
                      toggleCheck={() => toggleAnswer(QUESTION_SEVEN_BUTTON_FEMALE)}
                      title={QUESTION_SEVEN_BUTTON_FEMALE}
            />
            <CheckBox isChecked={(sexChecked === QUESTION_SEVEN_BUTTON_MALE)}
                      toggleCheck={() => toggleAnswer(QUESTION_SEVEN_BUTTON_MALE)}
                      title={QUESTION_SEVEN_BUTTON_MALE}
            />
        </View>
    )
};

QuestionSevenCheckbox.propTypes = {
    toggleAnswer: PropTypes.func.isRequired,
    sexChecked: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    sexChecked: getSex(state)
});

const mapDispatchToProps = dispatch => ({
    toggleAnswer: value => dispatch(setSex(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionSevenCheckbox);