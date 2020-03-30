import {Platform, StyleSheet} from "react-native";

export default styles = StyleSheet.create({
    fill: {
        flex: 1,
        // backgroundColor: '#ff60c5'
    },
    content: {
        flex: 1,
    },
    header: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        // backgroundColor: '#03A9F4',
        // marginRight: 10,
        overflow: 'hidden',
        // height: HEADER_MAX_HEIGHT,
    },
    placeholder: {
        flex: 1,
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // right: 0,
        // backgroundColor: '#03A9F4',
        // marginRight: 10,
        overflow: 'hidden',
        // height: HEADER_MAX_HEIGHT,
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: null,
        // height: HEADER_MAX_HEIGHT,
        resizeMode: 'cover',
    },
    bar: {
        backgroundColor: 'transparent',
        marginTop: Platform.OS === 'ios' ? 28 : 38,
        // height: 32,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
    title: {
        color: 'white',
        fontSize: 18,
    },
    scrollViewContent: {
        // iOS uses content inset, which acts like padding.
        // paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0,
    },
    row: {
        height: 40,
        margin: 16,
        backgroundColor: '#D3D3D3',
        alignItems: 'center',
        justifyContent: 'center',
    },
});