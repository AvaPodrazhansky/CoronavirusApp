import * as React from 'react';
import MapView from 'react-native-maps';
import {setRegion} from '../actions/summary-map/map-regions';
import connect from "react-redux/lib/connect/connect";
import {getRegion} from '../selectors/summary-map/map-regions';
import { Text, StyleSheet } from 'react-native';

const InfectionMap = ({region, setRegion}) => {

    return (
        <MapView
            region={region}
            onRegionChange={setRegion}
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
    baseText: {
        marginVertical: 20,
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

const mapStateToProps = state => ({
    region: getRegion(state)
});

const mapDispatchToProps = dispatch => ({
    setRegion: region => dispatch(setRegion(region))
});

export default connect(mapStateToProps, mapDispatchToProps)(InfectionMap);