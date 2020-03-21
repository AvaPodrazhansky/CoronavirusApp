import {Button} from 'react-native-elements'
import React from "react";
import PropTypes from "prop-types";

const ReactNativeButton = ({title, actionFunction, buttonStyle}) => {
    return (
        <Button
            title={title}
            onPress={actionFunction}
            buttonStyle={buttonStyle}
        />
    )
};

ReactNativeButton.propTypes = {
    actionFunction: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    buttonStyle: PropTypes.object.isRequired
};

export default ReactNativeButton;
