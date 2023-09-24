/**
 * @file File with the Spinner component.
 * @author Jay Bhatt
 */

import { ActivityIndicator, StyleSheet, View } from "react-native";
import COLORS from "../../utils/colors";

/**
 * The Spinner component.
 *
 * @returns {JSX.Element} A component that represents the Spinner.
 * @constructor
 */
const Spinner = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={COLORS.spinner} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Spinner;
