import {StyleSheet} from "react-native";
import colors from '../../constants/Colors';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    contentContainer: {
        paddingTop: 30,
    },
    title: {
        fontSize: 17
    },
    listText: {},
    emergency: {
        backgroundColor: colors.RED
    },
    emergencyText: {
        color: colors.WHITE,
        fontWeight: '300',
        textAlign: 'center',
        fontSize: 15,
        margin: 15,
        lineHeight: 25
    },
    emergencyCardTitle: {
        color: colors.WHITE,
        fontSize: 17,
        fontWeight: 'bold'
    },
    emergencyCardDivider: {
        backgroundColor: colors.WHITE,

    },
    titleContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
});
