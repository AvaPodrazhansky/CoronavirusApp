import * as React from 'react';
import {Button, Image, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import {connect} from "react-redux";

const NewsScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            </ScrollView>
        </View>
    );
};

NewsScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        paddingTop: 30,
    },
});

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, props) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NewsScreen);
