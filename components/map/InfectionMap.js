import * as React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {setRegion} from '../../actions/summary-map/map-regions';
import connect from "react-redux/lib/connect/connect";
import {getRegion} from '../../selectors/summary-map/map-regions';
import { Text, StyleSheet } from 'react-native';
import { Dimensions } from "react-native";
import {getConfirmedCases} from "../../actions/summary-map/confirmed-cases";
import myMapStyle from './map-styles';

const InfectionMap = ({region, setRegion}) => {
    // getConfirmedCases();
    return (
        <MapView
            provider={PROVIDER_GOOGLE}
            initialRegion={region}
            onRegionChange={setRegion}
            style={styles.mapStyle}
            customMapStyle={myMapStyle}
        />
        // <Text style={styles.baseText}>
        //     <Text style={styles.titleText}>
        //         {'Title'}{'\n'}{'\n'}
        //     </Text>
        //     <Text numberOfLines={5}>
        //         {region.longitude}
        //     </Text>
        // </Text>
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
        // height: Dimensions.get('window').height,
        // flex: 1.
        ...StyleSheet.absoluteFillObject,


    },
});

const mapStateToProps = state => ({
    region: getRegion(state)
});

const mapDispatchToProps = dispatch => ({
    setRegion: region => dispatch(setRegion(region))
});

export default connect(mapStateToProps, mapDispatchToProps)(InfectionMap);