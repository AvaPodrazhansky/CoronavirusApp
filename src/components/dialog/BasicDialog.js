/**
 * @file File with the Basic Dialog component.
 * @author Jay Bhatt
 */

import { StyleSheet, Text } from "react-native";
import { useState } from "react";
import { Dialog } from "react-native-elements";
import PropTypes from "prop-types";

/**
 * The Basic Dialog component.
 *
 * @param initialVisibility {boolean} The initial visibility of the dialog box.
 * @param title {string} The title of the dialog box.
 * @param bodyText {string} The body text of the dialog box.
 * @returns {JSX.Element} A component that represents a basic dialog box.
 * @constructor
 */
const BasicDialog = ({ initialVisibility, title, bodyText }) => {
    const [visible, setVisible] = useState(initialVisibility);

    /**
     * Toggles the visibility of the dialog box.
     */
    const toggleDialogVisibility = () => {
        setVisible(!visible);
    };

    return (
        <Dialog isVisible={visible} onBackdropPress={toggleDialogVisibility}>
            <Dialog.Title title={title} titleStyle={styles.dialogText} />
            <Text style={styles.dialogText}>{bodyText}</Text>
        </Dialog>
    );
};

const styles = StyleSheet.create({
    dialogText: {
        textAlign: "center",
    },
});

BasicDialog.propTypes = {
    initialVisibility: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    bodyText: PropTypes.string,
};

export default BasicDialog;
