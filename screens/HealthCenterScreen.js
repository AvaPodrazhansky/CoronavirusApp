import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from "react-redux";
import NHCMap from '../components/map/NHC-Map';
import { Dimensions } from "react-native";
import NHCList from '../components/lists/NHC-List';

const HealthCenterScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.mapContainer}>
                <NHCMap/>
            </View>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <NHCList/>
            </ScrollView>
        </View>
    );
};

HealthCenterScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    mapContainer: {
        // flex: 1,
        height: Dimensions.get('window').height * .3,
        backgroundColor: '#fff',
        margin: 15,
        marginBottom: 5

    },
    contentContainer: {
        paddingTop: 30,
    },
});

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, props) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HealthCenterScreen);
