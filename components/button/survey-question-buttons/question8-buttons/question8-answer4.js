import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {chronicKidneyDiseasePressed} from "../../../../actions/symptom-survey/question8";

const QuestionEightAnswerFourButton = ({chronicKidneyDiseasePressed}) => {
    return (
        <Button
            title="Chronic Kidney Disease or Regular Kidney Disease"
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