import {Button} from 'react-native-elements'
import React from "react";
import PropTypes from "prop-types";

const ReactNativeButton = ({title, actionFunction}) => {
    return (
        <Button
            title={title}
            onPress={actionFunction}
        />
    )
};

ReactNativeButton.propTypes = {
    actionFunction: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
};

//TODO: Make Stylesheet

export default ReactNativeButton;
