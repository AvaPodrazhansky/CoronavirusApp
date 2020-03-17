import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {setAge} from "../../actions/symptom-survey/question6";
import {getAge} from "../../selectors/symptom-survey/question6";

const AgeTextInput = ({setAge, age}) => {
    return (
        <TextInput
            style={styles.inputText}
            onChange={e => setAge(e.nativeEvent.text.trim())}
            value={age}>
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

AgeTextInput.propTypes = {
    age: PropTypes.number.isRequired,
    setAge: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    age: getAge(state)
});

const mapDispatchToProps = dispatch => ({
    setAge: age => dispatch(setAge(age))
});

export default connect(mapStateToProps, mapDispatchToProps)(AgeTextInput);
