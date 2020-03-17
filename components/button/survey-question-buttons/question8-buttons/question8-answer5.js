import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {hormoneMedicationPressed} from "../../../../actions/symptom-survey/question8";

const QuestionEightAnswerFiveButton = ({hormoneMedicationPressed}) => {
    return (
        <Button
            title="Currently on Hormone Medication or Immunosuppressive Drugs"
            onPress={() => hormoneMedicationPressed()}
        />
    )
};

const styles = StyleSheet.create({});

QuestionEightAnswerFiveButton.propTypes = {
    hormoneMedicationPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    hormoneMedicationPressed: () => dispatch(hormoneMedicationPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionEightAnswerFiveButton);