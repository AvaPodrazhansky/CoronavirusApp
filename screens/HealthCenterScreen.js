import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from "react-redux";
import NHCMap from '../components/map/NHC-Map';

const HealthCenterScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.mapContainer}>
                <NHCMap/>
            </View>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

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
        flex: 1,
        backgroundColor: '#fff',
        margin: 15,

    },
    contentContainer: {
        paddingTop: 30,
    },
});

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, props) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HealthCenterScreen);
