import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {persistentHeadachePressed} from "../../../../actions/symptom-survey/question2";

const QuestionTwoAnswerTenButton = ({persistentHeadachePressed}) => {
    return (
        <Button
            title="Persistent Headache"
            onPress={() => persistentHeadachePressed()}
        />
    )
};

const styles = StyleSheet.create({});

QuestionTwoAnswerTenButton.propTypes = {
    persistentHeadachePressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    persistentHeadachePressed: () => dispatch(persistentHeadachePressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTwoAnswerTenButton);