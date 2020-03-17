import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {lungDiseasePressed} from "../../../../actions/symptom-survey/question8";
import {QUESTION_EIGHT_BUTTON_ANSWER_EIGHT} from "../../../../constants/constant-list";

const QuestionEightAnswerEightButton = ({lungDiseasePressed}) => {
    return (
        <Button
            title={QUESTION_EIGHT_BUTTON_ANSWER_EIGHT}
            onPress={() => lungDiseasePressed()}
        />
    )
};

const styles = StyleSheet.create({});

QuestionEightAnswerEightButton.propTypes = {
    lungDiseasePressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    lungDiseasePressed: () => dispatch(lungDiseasePressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionEightAnswerEightButton);