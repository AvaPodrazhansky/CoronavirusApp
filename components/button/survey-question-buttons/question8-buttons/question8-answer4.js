import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {chronicKidneyDiseasePressed} from "../../../../actions/symptom-survey/question8";
import {QUESTION_EIGHT_BUTTON_ANSWER_FOUR} from "../../../../constants/constant-list";

const QuestionEightAnswerFourButton = ({chronicKidneyDiseasePressed}) => {
    return (
        <Button
            title={QUESTION_EIGHT_BUTTON_ANSWER_FOUR}
            onPress={() => chronicKidneyDiseasePressed()}
        />
    )
};

const styles = StyleSheet.create({});

QuestionEightAnswerFourButton.propTypes = {
    chronicKidneyDiseasePressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    chronicKidneyDiseasePressed: () => dispatch(chronicKidneyDiseasePressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionEightAnswerFourButton);