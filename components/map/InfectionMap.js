import * as React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {setRegion} from '../../actions/summary-map/map-regions';
import connect from "react-redux/lib/connect/connect";
import {getRegion} from '../../selectors/summary-map/map-regions';
import { Text, StyleSheet } from 'react-native';
import { Dimensions } from "react-native";
import {getConfirmedCases} from "../../actions/summary-map/confirmed-cases";
import myMapStyle from './map-styles';
import {getData} from "../../selectors/summary-map/daily-data";
import {getDailyData} from "../../actions/summary-map/daily-data";

const InfectionMap = ({region, setRegion, data, getData}) => {

    React.useEffect(() => {
        if(data.length === 0) getData();
    }, []);

    return (
        <MapView
            provider={PROVIDER_GOOGLE}
            initialRegion={region}
            onRegionChange={setRegion}
            style={styles.mapStyle}
            customMapStyle={myMapStyle}
        />
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
        // flex: 1.
        // ...StyleSheet.absoluteFillObject,


    },
});

const mapStateToProps = state => ({
    region: getRegion(state),
    data: getData(state)
});

const mapDispatchToProps = dispatch => ({
    setRegion: region => dispatch(setRegion(region)),
    getData: () => dispatch(getDailyData())
});

export default connect(mapStateToProps, mapDispatchToProps)(InfectionMap);