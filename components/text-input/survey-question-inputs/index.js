import {Input} from 'react-native-elements'
import React from "react";
import PropTypes from "prop-types";

const ReactNativeInput = ({title, titleStyle, actionFunction, value}) => {
    return (
        <Input
            label={title}
            labelStyle={titleStyle}
            onChange={actionFunction}
            value={value}
        />
    )
};

ReactNativeInput.propTypes = {
    actionFunction: PropTypes.func.isRequired,
    titleStyle: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired
};

//TODO: Make Stylesheet

export default ReactNativeInput;
