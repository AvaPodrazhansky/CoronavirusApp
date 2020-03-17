import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {setSex} from "../../../../actions/symptom-survey/question7";

const QuestionSevenMaleButton = ({setSex}) => {
    return (
        <Button
            title="Male"
            onPress={() => setSex(false)}
        />
    )
};

const styles = StyleSheet.create({});

QuestionSevenMaleButton.propTypes = {
    setSex: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    setSex: value => dispatch(setSex(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionSevenMaleButton);