/**
 * @file File with the Chat Bot Screen component.
 * @author Jay Bhatt
 */

import { Image, StyleSheet, Text, View } from "react-native";
import STRINGS from "../utils/strings";

/**
 * The Chat Bot Screen component.
 *
 * @returns {JSX.Element} A component that represents the Chat Bot Screen.
 * @constructor
 */
const ChatBotScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/images/phone.png")}
                style={styles.image}
            />
            <Text>{STRINGS.chatBotUnavailable}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        marginBottom: 16,
    },
});

export default ChatBotScreen;
