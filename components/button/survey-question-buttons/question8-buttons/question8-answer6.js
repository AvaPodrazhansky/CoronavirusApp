import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {cancerPressed} from "../../../../actions/symptom-survey/question8";

const QuestionEightAnswerSixButton = ({cancerPressed}) => {
    return (
        <Button
            title="Cancer"
            onPress={() => cancerPressed()}
        />
    )
};

const styles = StyleSheet.create({});

QuestionEightAnswerSixButton.propTypes = {
    cancerPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    cancerPressed: () => dispatch(cancerPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionEightAnswerSixButton);