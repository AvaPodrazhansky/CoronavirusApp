import {Dimensions, StyleSheet} from "react-native";
import colors from "../../../constants/Colors";

export default styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: colors.LIGHT_BLUE,
        padding: 10,
        borderRadius: 3,
        margin: 10
    },
    acceptButton: {
        alignItems: 'center',
        backgroundColor: colors.LIGHT_BLUE,
        padding: 10,
        borderRadius: 3,
        margin: 5
    },
    redoButton: {
        alignItems: 'center',
        backgroundColor: 'transparent',
        padding: 10,
        borderRadius: 3,
        margin: 10,
        justifyContent: "center",
    },
    resetButton: {
        alignItems: 'center',
        backgroundColor: 'transparent',
        padding: 10,
        borderRadius: 3,
        margin: 10,
        justifyContent: "center",
    },
    resetIcon: {
        color: colors.DARK_GRAY,
        fontWeight: 'bold'
    },
    btnTextStyle: {
        color: colors.WHITE,
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 20,
    },
    icon: {
        color: colors.WHITE,
        fontWeight: 'bold'
    },
    text: {
        fontSize: 15,
        color: colors.WHITE,
        fontWeight: '200'
    },
    resetText: {
        fontSize: 15,
        color: colors.DARK_GRAY,
        fontWeight: '200'
    },
    errorMessage: {
        fontSize: 15,
        color: colors.DARK_GRAY,
        fontWeight: 'bold',
    },
    viewStyle: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    }
});
