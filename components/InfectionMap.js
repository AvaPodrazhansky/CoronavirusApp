import * as React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {setRegion} from '../actions/summary-map/map-regions';
import connect from "react-redux/lib/connect/connect";
import {getRegion} from '../selectors/summary-map/map-regions';
import { Text, StyleSheet } from 'react-native';
import { Dimensions } from "react-native";

const InfectionMap = ({region, setRegion}) => {

    return (
        <MapView
            provider={PROVIDER_GOOGLE}
            initialRegion={region}
            onRegionChange={setRegion}
            style={styles.mapStyle}
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
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

const mapStateToProps = state => ({
    region: getRegion(state)
});

const mapDispatchToProps = dispatch => ({
    setRegion: region => dispatch(setRegion(region))
});

export default connect(mapStateToProps, mapDispatchToProps)(InfectionMap);