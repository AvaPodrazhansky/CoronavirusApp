import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {showDiagnosisScreen} from "../../../actions/symptom-survey/submit-survey";
import {ACCEPT_CONDITIONS} from "../../../constants/constant-list";
import styles from './button-styles'
import {Text, TouchableHighlight, TouchableNativeFeedback, View} from "react-native";

const AcceptTermsButton = ({goToSurvey}) => {
    if (Platform.OS === 'android') {
        return (
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple('#ffffff', false)}
                useForeground={true}
                onPress={goToSurvey}
                style={styles.acceptButton}>
                <View
                    style={styles.acceptButton}>
                    <Text style={styles.btnTextStyle}>{ACCEPT_CONDITIONS}</Text>
                </View>
            </TouchableNativeFeedback>
        )
    } else {
        return (
            <View>
                <TouchableHighlight style={styles.acceptButton}
                                    delayPressIn={0}
                                    onPress={goToSurvey}
                                    activeOpacity={0.4}
                                    underlayColor={'grey'}>
                    <Text style={styles.btnTextStyle}>{ACCEPT_CONDITIONS}</Text>
                </TouchableHighlight>
            </View>
        )
    }
};

AcceptTermsButton.propTypes = {
    goToSurvey: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    goToSurvey: () => dispatch(showDiagnosisScreen())
});

export default connect(mapStateToProps, mapDispatchToProps)(AcceptTermsButton);
