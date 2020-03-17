import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {wildAnimalsPressed} from "../../../../actions/symptom-survey/question5";


const QuestionFiveAnswerOneButton = ({wildAnimalsPressed}) => {
    return (
        <Button
            title="Wild animals (Bats, Marmots, Civets, Camels, or Rats)"
            onPress={() => wildAnimalsPressed()}
        />
    )
};

const styles = StyleSheet.create({});

QuestionFiveAnswerOneButton.propTypes = {
    wildAnimalsPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    wildAnimalsPressed: () => dispatch(wildAnimalsPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionFiveAnswerOneButton);