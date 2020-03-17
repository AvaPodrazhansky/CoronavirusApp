import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {highBloodPressurePressed} from "../../../../actions/symptom-survey/question8";
import {QUESTION_EIGHT_BUTTON_ANSWER_ONE} from "../../../../constants/constant-list";

const QuestionEightAnswerOneButton = ({highBloodPressurePressed}) => {
    return (
        <Button
            title={QUESTION_EIGHT_BUTTON_ANSWER_ONE}
            onPress={() => highBloodPressurePressed()}
        />
    )
};

const styles = StyleSheet.create({});

QuestionEightAnswerOneButton.propTypes = {
    highBloodPressurePressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    highBloodPressurePressed: () => dispatch(highBloodPressurePressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionEightAnswerOneButton);