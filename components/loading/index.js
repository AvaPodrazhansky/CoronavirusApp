import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';
import colors from '../../constants/Colors';

export default () => {
    return (
        <View style={styles.loadingView}>
            <ActivityIndicator size="large" color={colors.LIGHT_BLUE}/>
        </View>
    )
}

const styles = StyleSheet.create({
    loadingView: {
        justifyContent: "space-around",
        padding: 10,
        flex: 1,
    }
});