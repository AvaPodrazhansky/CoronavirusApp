import React from 'react';
import PropTypes from 'prop-types';
import {EvilIcons} from '@expo/vector-icons';
import {Text, TouchableHighlight, TouchableNativeFeedback, View} from "react-native";
import styles from './survey-question-buttons/button-styles'
import {LOAD_DATA_ERROR_MESSAGE, RETRY_LABEL} from "../../constants/constant-list";

const RefreshButton = ({onPress}) => {
    if (Platform.OS === 'android') {
        return (
            <View style={{justifyContent: "center", alignItems: "center",}}>
                <Text>{LOAD_DATA_ERROR_MESSAGE}</Text>
                <TouchableNativeFeedback
                    background={TouchableNativeFeedback.Ripple('#ffffff', false)}
                    useForeground={true}
                    onPress={onPress}>
                    <View style={styles.redoButton}>
                        <EvilIcons name={'redo'} size={50} style={styles.icon}/>
                        <Text style={styles.text}>{RETRY_LABEL}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    } else {
        return (
            <View style={{justifyContent: "center", alignItems: "center",}}>
                <Text>{LOAD_DATA_ERROR_MESSAGE}</Text>
                <TouchableHighlight style={styles.redoButton}
                                    delayPressIn={0}
                                    onPress={onPress}
                                    activeOpacity={0.3}
                                    underlayColor={'transparent'}>
                    <View style={styles.redoButton}>
                        <EvilIcons name={'redo'} size={50} style={styles.icon}/>
                        <Text style={styles.text}>{RETRY_LABEL}</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
};

RefreshButton.propTypes = {
    onPress: PropTypes.func.isRequired
};

export default RefreshButton;

