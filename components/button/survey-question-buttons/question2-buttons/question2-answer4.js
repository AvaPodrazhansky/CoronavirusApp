import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {soreThroatPressed} from "../../../../actions/symptom-survey/question2";

const QuestionTwoAnswerFourButton = ({soreThroatPressed}) => {
    return (
        <Button
            title="Sore Throat or Runny Nose"
            onPress={() => soreThroatPressed()}
        />
    )
};

const styles = StyleSheet.create({});

QuestionTwoAnswerFourButton.propTypes = {
    soreThroatPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    soreThroatPressed: () => dispatch(soreThroatPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTwoAnswerFourButton);