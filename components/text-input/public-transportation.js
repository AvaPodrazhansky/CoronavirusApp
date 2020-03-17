import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {setPublicTransportation} from "../../actions/symptom-survey/question4";
import {getNumber} from "../../selectors/symptom-survey/question4";

const PublicTransportationTextInput = ({setPublicTransportation, number}) => {
    return (
        <TextInput
            style={styles.inputText}
            onChange={e => setPublicTransportation(e.nativeEvent.text.trim())}
            value={number}>
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

PublicTransportationTextInput.propTypes = {
    number: PropTypes.number.isRequired,
    setPublicTransportation: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    number: getNumber(state)
});

const mapDispatchToProps = dispatch => ({
    setPublicTransportation: number => dispatch(setPublicTransportation(number))
});

export default connect(mapStateToProps, mapDispatchToProps)(PublicTransportationTextInput);
