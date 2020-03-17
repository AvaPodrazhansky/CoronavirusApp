import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {lungDiseasePressed} from "../../../../actions/symptom-survey/question8";

const QuestionEightAnswerEightButton = ({lungDiseasePressed}) => {
    return (
        <Button
            title="Chronic Lung Disease (Pulmonary Fibrosis, Chronic Obstructive Pulmonary Disease
                    (C.O.P.D.), or Respiratory Failure)"
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