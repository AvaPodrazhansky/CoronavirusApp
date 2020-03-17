import React from 'react';
import {setLocation} from "../../actions/symptom-survey/question1";
import {getLocation} from "../../selectors/symptom-survey/question1";
import {Platform, StyleSheet, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

const SurveyLocationTextInput = ({setLocation, location}) => {
    return (
        <TextInput
            style={styles.inputText}
            onChange={e => setLocation(e.nativeEvent.text.trim())}
            value={location}>
        </TextInput>
    )
};

const styles = StyleSheet.create({
    inputText: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        flex: 1
    }
});

SurveyLocationTextInput.propTypes = {
    location: PropTypes.string.isRequired,
    setLocation: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    location: getLocation(state)
});

const mapDispatchToProps = dispatch => ({
    setLocation: location => dispatch(setLocation(location))
});

export default connect(mapStateToProps, mapDispatchToProps)(SurveyLocationTextInput);
