import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {wildAnimalsPressed} from "../../../../actions/symptom-survey/question5";
import {QUESTION_FIVE_BUTTON_ANSWER_ONE} from "../../../../constants/constant-list";


const QuestionFiveAnswerOneButton = ({wildAnimalsPressed}) => {
    return (
        <Button
            title={QUESTION_FIVE_BUTTON_ANSWER_ONE}
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