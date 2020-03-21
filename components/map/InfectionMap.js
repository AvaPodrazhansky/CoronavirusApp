import * as React from 'react';
import MapView, {Circle, Heatmap, PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import ClusteredMapView from "react-native-map-clustering/lib/ClusteredMapView";
import {setRegion} from '../../actions/summary-map/map-regions';
import connect from "react-redux/lib/connect/connect";
import {getRegion} from '../../selectors/summary-map/map-regions';
import {Text, StyleSheet} from 'react-native';
import {Dimensions} from "react-native";
import {getConfirmedCases} from "../../actions/summary-map/confirmed-cases";
import myMapStyle from './map-styles';
import {getData, isFetchingSelector} from "../../selectors/summary-map/daily-data";
import {getDailyData} from "../../actions/summary-map/daily-data";
import colors from '../../constants/Colors';
import {FontAwesome, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';

const InfectionMap = ({region, setRegion, data, getData, isFetching}) => {

    React.useEffect(() => {
        if (data.length === 0 && !isFetching) getData();
    }, []);

    // data.forEach(item => {
    //     console.log(item)
    // });
    // console.log(data)

    if (isFetching) {
        return (
            <Text>Loading</Text>
        )
    }

    const Circles = () => data.map((item, index) => (
        <Circle key={index}
                center={{
                    latitude: item.latitude,
                    longitude: item.longitude,
                }}
                radius={item.confirmed * 100}
                fillColor={colors.CONFIRMED}
        />
    ));

    const MyMarkers = () => data.map((item, index) => (
        <Marker key={index}
                coordinate={{
                    latitude: item.latitude,
                    longitude: item.longitude,
                }}
                pinColor={colors.CONFIRMED}
                description={item.confirmed + ''}
                tracksViewChanges={false}
                // icon={<FontAwesome class='circle fa-2x'/>}
        >
            {/*<Ionicons*/}
            {/*    name="md-checkmark-circle"*/}
            {/*    size={50}*/}
            {/*/>*/}
            {/*<FontAwesome class='circle fa-2x'/>*/}
            {/*<FontAwesome name={'circle'}/>*/}
            <MaterialCommunityIcons name={'circle'} size={12} color={colors.DEAD_TRANSPARENT}/>
        </Marker>
    ));

    // const MyHeatMap = () => data.map((item, index) => (
    //     <Heatmap key={index}
    //              center={{
    //                  latitude: Number(item.latitude),
    //                  longitude: Number(item.longitude),
    //              }}
    //              weight={Number(item.confirmed) * 1000}
    //         // radius={500}
    //         // fillColor={colors.CONFIRMED}
    //     />
    // ));

    // let heatmapPoints = data;
    // heatmapPoints = heatmapPoints.map(item => ({
    //     latitude: Number(item.latitude),
    //     longitude: Number(item.longitude),
    //     weight: Number(item.confirmed)
    // }));
    //
    // console.log(heatmapPoints)
    //
    // const MyHeatMap2 = () => {
    //     // _printTime('HEATMAP 2');
    //     return (
    //         <Heatmap points={heatmapPoints}
    //         radius={50}
    //         // gradient={{colors: ["#00E400", "#FF0000"], values: [0.2, 1.0]}}
    //         />
    //     )
    // };


    function _printTime(value = '') {
        const d = new Date();
        console.log(value + " " + Number(d.getHours() - 12) + ":" + d.getMinutes() + ":" + d.getSeconds());
    }

    _printTime('MAP VIEW');
    return (
        <MapView
            // provider={PROVIDER_GOOGLE} // Apparently google maps run slower on ios than apple maps
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
            {/*<Circles/>*/}
            {/*<MyHeatMap/>*/}
            {/*<MyHeatMap2/>*/}
            <MyMarkers/>
        </MapView>
    );

    // return (
    //     <ClusteredMapView
    //         // provider={PROVIDER_GOOGLE} // Apparently google maps run slower on ios than apple maps
    //         initialRegion={region}
    //         // onRegionChange={setRegion}
    //         style={styles.mapStyle}
    //         customMapStyle={myMapStyle}
    //         mapType={"mutedStandard"}
    //         // mapPadding={{
    //         //     top: 5000000,
    //         //     right: 5000,
    //         //     bottom: 5000000,
    //         //     left: 5000
    //         // }}
    //         fitToElements={true}
    //
    //         maxZoomLevel={7} x
    //         onRegionChangeComplete={setRegion}
    //     >
    //         {/*<Circles/>*/}
    //         {/*<MyHeatMap/>*/}
    //         {/*<MyHeatMap2/>*/}
    //         <MyMarkers/>
    //     </ClusteredMapView>
    // );

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