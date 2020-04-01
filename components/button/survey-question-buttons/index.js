import {Button} from 'react-native-elements'
import React from "react";
import PropTypes from "prop-types";
import {Animated, TouchableHighlight, TouchableHighlightComponent} from "react-native";
import colors from '../../../constants/Colors';
import styles from './button-styles';

const ReactNativeButton = ({title, actionFunction, buttonStyle, touchableComponent, ...props}) => {
    return (
// TODO: Make animation work
        <TouchableHighlight underlayColor={colors.WHITE} activeOpacity={0.6}>
            <Button
                title={title || ''}
                onPress={actionFunction || null}
                buttonStyle={buttonStyle || styles.button}
                TouchableComponent={touchableComponent}
                icon={props.children}
                type={props.type ? props.type : 'solid'}
            />
        </TouchableHighlight>
    )
};

ReactNativeButton.propTypes = {
    actionFunction: PropTypes.func,
    title: PropTypes.string,
    buttonStyle: PropTypes.object,
    touchableComponent: PropTypes.any
};

export default ReactNativeButton;
