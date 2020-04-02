import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {submitSurvey} from "../../../actions/symptom-survey/submit-survey";
import {SUBMIT_BUTTON_TEXT} from "../../../constants/constant-list";
import styles from './button-styles'
import {Text, TouchableHighlight, TouchableNativeFeedback, View} from "react-native";

const SubmitButton = ({submitSurvey}) => {
    if (Platform.OS === 'android') {
        return (
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple('#ffffff', false)}
                useForeground={true}
                onPress={submitSurvey}
                style={styles.button}>
                <View
                    style={styles.button}>
                    <Text style={styles.btnTextStyle}>{SUBMIT_BUTTON_TEXT}</Text>
                </View>
            </TouchableNativeFeedback>
        )
    } else {
        return (
            <View>
                <TouchableHighlight style={styles.button}
                                    delayPressIn={0}
                                    onPress={submitSurvey}
                                    activeOpacity={0.4}
                                    underlayColor={'grey'}>
                    <Text style={styles.btnTextStyle}>{SUBMIT_BUTTON_TEXT}</Text>
                </TouchableHighlight>
            </View>
        )
    }
};

SubmitButton.propTypes = {
    submitSurvey: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    submitSurvey: () => dispatch(submitSurvey())
});

export default connect(mapStateToProps, mapDispatchToProps)(SubmitButton);
