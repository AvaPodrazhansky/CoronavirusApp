import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {liverCirrhosisPressed} from "../../../../actions/symptom-survey/question8";

const QuestionEightAnswerSevenButton = ({liverCirrhosisPressed}) => {
    return (
        <Button
            title="Liver Cirrhosis"
            onPress={() => liverCirrhosisPressed()}
        />
    )
};

const styles = StyleSheet.create({});

QuestionEightAnswerSevenButton.propTypes = {
    liverCirrhosisPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    liverCirrhosisPressed: () => dispatch(liverCirrhosisPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionEightAnswerSevenButton);