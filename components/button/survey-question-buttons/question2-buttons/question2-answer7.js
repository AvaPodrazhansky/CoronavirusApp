import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {diarrheaPressed} from "../../../../actions/symptom-survey/question2";
import {QUESTION_TWO_BUTTON_ANSWER_SEVEN} from "../../../../constants/constant-list";

const QuestionTwoAnswerSevenButton = ({diarrheaPressed}) => {
    return (
        <Button
            title={QUESTION_TWO_BUTTON_ANSWER_SEVEN}
            onPress={() => diarrheaPressed()}
        />
    )
};

const styles = StyleSheet.create({});

QuestionTwoAnswerSevenButton.propTypes = {
    diarrheaPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    diarrheaPressed: () => dispatch(diarrheaPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTwoAnswerSevenButton);