import React from 'react';
import {TouchableHighlight, TouchableNativeFeedback} from "react-native";

const TouchableButton = ({children, onPress}) => {
    if (Platform.OS === 'android') {
        return (
            <TouchableNativeFeedback onPress={onPress}
                                     background={TouchableNativeFeedback.Ripple('#ffffff', false)}
                                     useForeground={true}>
                {children}
            </TouchableNativeFeedback>
        )
    } else {
        return (
            <TouchableHighlight delayPressIn={0}
                                onPress={onPress}
                                activeOpacity={0.3}
                                underlayColor={'transparent'}>
                {children}
            </TouchableHighlight>
        )
    }
};

export default TouchableButton;


