import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {decreasedSweatingPressed} from "../../../../actions/symptom-survey/question2";

const QuestionTwoAnswerElevenButton = ({decreasedSweatingPressed}) => {
    return (
        <Button
            title="Decreased Sweating or Urination"
            onPress={() => decreasedSweatingPressed()}
        />
    )
};

const styles = StyleSheet.create({});

QuestionTwoAnswerElevenButton.propTypes = {
    decreasedSweatingPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    decreasedSweatingPressed: () => dispatch(decreasedSweatingPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTwoAnswerElevenButton);