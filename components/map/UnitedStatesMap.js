import * as React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import connect from "react-redux/lib/connect/connect";
import {StyleSheet} from 'react-native';
import {Dimensions} from "react-native";
import myMapStyle from './map-styles';

// {
//     "latitude": 27.365526186827243,
//     "latitudeDelta": 69.23937484479055,
//     "longitude": -98.13053995370865,
//     "longitudeDelta": 56.31902597844601,
// }


const UnitedStatesMap = ({}) => {
    return (

        <MapView
            provider={PROVIDER_GOOGLE}
            region={
                {
                    "latitude": 37.365526186827243,
                    "longitude": -94.13053995370865,
                    "latitudeDelta": 26.5,
                    "longitudeDelta": 15.31902597844601,
                }
            }
            // onRegionChange={setRegion}
            style={styles.mapStyle}
            customMapStyle={myMapStyle}
        />
    );

};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: Dimensions.get('window').height * .25,
        margin: 10
    },
    mapStyle: {
        // width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * .3,
        flex: 1,
        margin: 15
        // ...StyleSheet.absoluteFillObject,


    },
});

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(UnitedStatesMap);