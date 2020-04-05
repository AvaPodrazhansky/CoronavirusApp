import {Input} from 'react-native-elements'
import React from "react";
import PropTypes from "prop-types";

const ReactNativeInput = ({title, titleStyle, actionFunction, value, keyboardType}) => {
    return (
        <Input
            label={title}
            labelStyle={titleStyle}
            onChange={actionFunction}
            value={value}
            keyboardType={keyboardType}
        />
    )
};

ReactNativeInput.propTypes = {
    actionFunction: PropTypes.func.isRequired,
    titleStyle: PropTypes.object,
    title: PropTypes.string.isRequired,
    value: PropTypes.any,
    keyboardType: PropTypes.string.isRequired
};

export default ReactNativeInput;
