import * as React from 'react';
import MapView, {Circle, Heatmap, PROVIDER_GOOGLE, Marker} from 'react-native-maps';
// import MapView from 'react-native-map-clustering';
import {setRegion} from '../../actions/summary-map/map-regions';
import connect from "react-redux/lib/connect/connect";
import {getRegion} from '../../selectors/summary-map/map-regions';
import {Text, StyleSheet} from 'react-native';
import {Dimensions} from "react-native";
import myMapStyle from './map-styles';
import {getData, isFetchingSelector} from "../../selectors/summary-map/daily-data";
import {getDailyData} from "../../actions/summary-map/daily-data";
import colors from '../../constants/Colors';
import CircleMarker from "./CircleMarker";

const InfectionMap = ({region, setRegion, data, getData, isFetching}) => {

    React.useEffect(() => {
        if (data.length === 0 && !isFetching) getData();
    }, []);


    // TODO: Change this. We need to show a loading screen while things are rendering
    if (isFetching) {
        return (
            <Text>Loading</Text>
        )
    }

    const MyMarkers = () => data.map((item, index) => (
        <CircleMarker key={index}
                      coord={{latitude: item.latitude, longitude: item.longitude}}
                      color={colors.CONFIRMED_TRANSPARENT}/>
    ));
    console.log(data.length)

    function _printTime(value = '') {
        const d = new Date();
        console.log(value + " " + Number(d.getHours() - 12) + ":" + d.getMinutes() + ":" + d.getSeconds());
    }

    _printTime('MAP VIEW');
    return (
        <MapView
            customMapStyle={myMapStyle}
            initialRegion={region}
            onRegionChange={setRegion}
            style={styles.mapStyle}
            mapType={"mutedStandard"}
            // mapPadding={{
            //     top: 5000000,
            //     right: 5000,
            //     bottom: 5000000,
            //     left: 5000
            // }}
            fitToElements={true}

            maxZoomLevel={7} x
            // onRegionChangeComplete={}
        >
            <MyMarkers/>
            {/*<CircleMarker key={-1}*/}
            {/*              coord={{latitude: 0, longitude: 0}}*/}
            {/*              color={"rgba(201,37,150,0.51)"}*/}
            {/*              size={15}/>*/}
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
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        // flex: 1.
        // ...StyleSheet.absoluteFillObject,


    },
});

const mapStateToProps = state => ({
    region: getRegion(state),
    data: getData(state),
    isFetching: isFetchingSelector(state)
});

const mapDispatchToProps = dispatch => ({
    setRegion: region => dispatch(setRegion(region)),
    getData: () => dispatch(getDailyData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(InfectionMap);