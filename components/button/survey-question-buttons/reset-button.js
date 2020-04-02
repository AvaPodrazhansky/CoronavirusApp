import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {resetSurvey} from "../../../actions/symptom-survey/submit-survey";
import {RESTART_BUTTON_TEXT} from "../../../constants/constant-list";
import {EvilIcons} from '@expo/vector-icons';
import {Text, TouchableHighlight, TouchableNativeFeedback, View} from "react-native";
import styles from './button-styles'

const ResetButton = ({resetSurvey}) => {
    if (Platform.OS === 'android') {
        return (
            <View style={{justifyContent: "center", alignItems: "center",}}>
                <TouchableNativeFeedback style={styles.redoButton}
                                         delayPressIn={0}
                                         onPress={resetSurvey}
                                         activeOpacity={0.3}
                                         underlayColor={'transparent'}>
                    <View style={{justifyContent: "center", alignItems: "center",}}>
                        <EvilIcons name={'redo'} size={50} style={styles.icon}/>
                        <Text style={styles.text}>{RESTART_BUTTON_TEXT}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    } else {
        return (
            <View style={{justifyContent: "center", alignItems: "center",}}>
                <TouchableHighlight style={styles.redoButton}
                                    delayPressIn={0}
                                    onPress={resetSurvey}
                                    activeOpacity={0.3}
                                    underlayColor={'transparent'}>
                    <View style={{justifyContent: "center", alignItems: "center",}}>
                        <EvilIcons name={'redo'} size={50} style={styles.icon}/>
                        <Text style={styles.text}>{RESTART_BUTTON_TEXT}</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
};

ResetButton.propTypes = {
    resetSurvey: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    resetSurvey: () => dispatch(resetSurvey())
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetButton);
