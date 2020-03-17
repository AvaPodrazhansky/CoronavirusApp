import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {feelingFlusteredPressed} from "../../../../actions/symptom-survey/question2";

const QuestionTwoAnswerNineButton = ({feelingFlusteredPressed}) => {
    return (
        <Button
            title="Feeling flustered or experiencing chest pain or distress"
            onPress={() => feelingFlusteredPressed()}
        />
    )
};

const styles = StyleSheet.create({});

QuestionTwoAnswerNineButton.propTypes = {
    feelingFlusteredPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    feelingFlusteredPressed: () => dispatch(feelingFlusteredPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTwoAnswerNineButton);