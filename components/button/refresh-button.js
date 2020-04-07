import React from 'react';
import PropTypes from 'prop-types';
import {EvilIcons} from '@expo/vector-icons';
import {Text, TouchableHighlight, TouchableNativeFeedback, View} from "react-native";
import styles from './survey-question-buttons/button-styles'
import {LOAD_DATA_ERROR_MESSAGE, RETRY_LABEL} from "../../constants/constant-list";
import Spinner from '../loading';

const RefreshButton = ({onPress, isFetching}) => {

    if (isFetching) {
        return <Spinner/>
    } else if (Platform.OS === 'android') {
        return (
            <View style={styles.viewStyle}>
                <Text style={styles.errorMessage}>{LOAD_DATA_ERROR_MESSAGE}</Text>
                <TouchableNativeFeedback
                    background={TouchableNativeFeedback.Ripple('#ffffff', false)}
                    useForeground={true}
                    onPress={onPress}>
                    <View style={styles.resetButton}>
                        <EvilIcons name={'redo'} size={50} style={styles.resetIcon}/>
                        <Text style={styles.resetText}>{RETRY_LABEL}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    } else {
        return (
            <View style={styles.viewStyle}>
                <Text style={styles.errorMessage}>{LOAD_DATA_ERROR_MESSAGE}</Text>
                <TouchableHighlight style={styles.resetButton}
                                    delayPressIn={0}
                                    onPress={onPress}
                                    activeOpacity={0.3}
                                    underlayColor={'transparent'}>
                    <View style={styles.resetButton}>
                        <EvilIcons name={'redo'} size={50} style={styles.resetIcon}/>
                        <Text style={styles.resetText}>{RETRY_LABEL}</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
};

RefreshButton.propTypes = {
    onPress: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired
};

export default RefreshButton;

