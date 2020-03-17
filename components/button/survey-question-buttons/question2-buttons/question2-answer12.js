import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {notListedAbovePressed} from "../../../../actions/symptom-survey/question2";

const QuestionTwoAnswerTwelveButton = ({notListedAbovePressed}) => {
    return (
        <Button
            title="I am experiencing other types of uncomfortableness not listed above."
            onPress={() => notListedAbovePressed()}
        />
    )
};

const styles = StyleSheet.create({});

QuestionTwoAnswerTwelveButton.propTypes = {
    notListedAbovePressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    notListedAbovePressed: () => dispatch(notListedAbovePressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTwoAnswerTwelveButton);