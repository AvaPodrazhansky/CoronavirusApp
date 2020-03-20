import { CheckBox } from 'react-native-elements'
import React from "react";
import PropTypes from "prop-types";

const ReactNativeCheckbox = ({title, isChecked, toggleCheck}) => {
    return (
        <CheckBox
            title={title}
            checked={isChecked}
            onPress={toggleCheck}
        />
    )
};

ReactNativeCheckbox.propTypes = {
    toggleCheck: PropTypes.func.isRequired,
    isChecked: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
};

export default ReactNativeCheckbox;
