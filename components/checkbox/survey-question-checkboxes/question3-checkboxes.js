import React from "react";
import {connect} from "react-redux";
import CheckBox from './index';
import {View, Text} from 'react-native';
import {QUESTION_THREE, QUESTION_THREE_BUTTON_YES, QUESTION_THREE_BUTTON_NO} from "../../../constants/constant-list";
import PropTypes from 'prop-types';
import {potentiallyExposed} from "../../../actions/symptom-survey/question3";
import {getExposed} from "../../../selectors/symptom-survey/question3";
import styles from './checkbox-styles'

const QuestionThreeCheckbox = ({exposedChecked, toggleAnswer}) => {
    return (
        <View>
            <Text style={styles.questionText}>{QUESTION_THREE}</Text>
            <CheckBox isChecked={(exposedChecked === true)}
                      toggleCheck={() => toggleAnswer(true)}
                      title={QUESTION_THREE_BUTTON_YES}
            />
            <CheckBox isChecked={(exposedChecked === false)}
                      toggleCheck={() => toggleAnswer(false)}
                      title={QUESTION_THREE_BUTTON_NO}
            />
        </View>
    )
};

QuestionThreeCheckbox.propTypes = {
    toggleAnswer: PropTypes.func.isRequired,
    exposedChecked: PropTypes.bool
};

const mapStateToProps = state => ({
    exposedChecked: getExposed(state)
});

const mapDispatchToProps = dispatch => ({
    toggleAnswer: value => dispatch(potentiallyExposed(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionThreeCheckbox);
