import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {suspectedCOVIDPressed} from "../../../../actions/symptom-survey/question5";


const QuestionFiveAnswerFourButton = ({suspectedCOVIDPressed}) => {
    return (
        <Button
            title="Close contact with suspected or confirmed COVID-19 case(s)"
            onPress={() => suspectedCOVIDPressed()}
        />
    )
};

const styles = StyleSheet.create({});

QuestionFiveAnswerFourButton.propTypes = {
    suspectedCOVIDPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    suspectedCOVIDPressed: () => dispatch(suspectedCOVIDPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionFiveAnswerFourButton);