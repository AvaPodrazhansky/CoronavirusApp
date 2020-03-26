import * as React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {setRegion} from '../../actions/summary-map/map-regions';
import connect from "react-redux/lib/connect/connect";
import {getRegion} from '../../selectors/summary-map/map-regions';
import {Text, StyleSheet} from 'react-native';
import {Marker} from 'react-native-maps';

const NHCMap = ({region, setRegion}) => {
    // getConfirmedCases();
    return (
        <MapView
            provider={PROVIDER_GOOGLE}
            initialRegion={region}
            onRegionChange={setRegion}
            style={styles.mapStyle}
            // customMapStyle={myMapStyle}
        >
            <Marker coordinate={{
                latitude: 37.78833,
                longitude: -122.4324
            }}/>
            <Marker coordinate={{
                latitude: 38.78542,
                longitude: -122.4335
            }}/>
            <Marker coordinate={{
                latitude: 38.5555,
                longitude: -121.4324
            }}/>
        </MapView>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {
        // width: Dimensions.get('window').width,
        // height: Dimensions.get('window').height * .3,
        // marginTop: 15,
        // marginBottom: 15,
        // marginLeft: 15,
        // marginRight: 15
        flex: 1,
        borderRadius: 10,
        borderWidth: 1
        // ...StyleSheet.absoluteFillObject,


    },
});

const mapStateToProps = state => ({
    region: getRegion(state)
});

const mapDispatchToProps = dispatch => ({
    setRegion: region => dispatch(setRegion(region))
});

export default connect(mapStateToProps, mapDispatchToProps)(NHCMap);