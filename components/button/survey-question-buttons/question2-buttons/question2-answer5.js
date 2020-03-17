import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {coughingPressed} from "../../../../actions/symptom-survey/question2";

const QuestionTwoAnswerFiveButton = ({coughingPressed}) => {
    return (
        <Button
            title="Coughing"
            onPress={() => coughingPressed()}
        />
    )
};

const styles = StyleSheet.create({});

QuestionTwoAnswerFiveButton.propTypes = {
    coughingPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    coughingPressed: () => dispatch(coughingPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTwoAnswerFiveButton);