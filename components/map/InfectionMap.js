import * as React from 'react';
// import MapView, {Circle, Heatmap, PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {Marker} from 'react-native-maps';
import MapView from 'react-native-map-clustering';
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
import {MaterialCommunityIcons} from "@expo/vector-icons";

const InfectionMap = ({region, setRegion, data, getData, isFetching}) => {

    React.useEffect(() => {
        if (data.length === 0 && isFetching === false) getData();
    }, []);


    // TODO: Change this. We need to show a loading screen while things are rendering
    if (isFetching) {
        return (
            <Text>Loading</Text>
        )
    }

    // const MyMarkers = () => data.map((item, index) => (
    //     <CircleMarker key={index}
    //                   coordinate={{latitude: item.latitude, longitude: item.longitude}}
    //                   color={colors.CONFIRMED_TRANSPARENT}/>
    // ));
    // console.log(data.length);
    // console.log(typeof colors.CONFIRMED_TRANSPARENT)

    function _printTime(value = '') {
        const d = new Date();
        console.log(value + " " + Number(d.getHours() - 12) + ":" + d.getMinutes() + ":" + d.getSeconds());
    }

    // _printTime('MAP VIEW');
    // return (
    //     <MapView
    //         customMapStyle={myMapStyle}
    //         initialRegion={region}
    //         onRegionChange={setRegion}
    //         style={styles.mapStyle}
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
    //         // onRegionChangeComplete={}
    //     >
    //         <MyMarkers/>
    //         {/*<CircleMarker key={-1}*/}
    //         {/*              coord={{latitude: 0, longitude: 0}}*/}
    //         {/*              color={"rgba(201,37,150,0.51)"}*/}
    //         {/*              size={15}/>*/}
    //         {/*<CircleMarker key={-2}*/}
    //         {/*              coord={{latitude: 50, longitude: 50}}*/}
    //         {/*              color={"rgba(112,64,255,0.51)"}*/}
    //         {/*              size={50}/>*/}
    //     </MapView>
    // );

// TODO: Update cluster number value
    return (
        <MapView
            customMapStyle={myMapStyle}
            initialRegion={region}
            onRegionChange={setRegion}
            style={styles.mapStyle}
            mapType={"mutedStandard"}
            fitToElements={true}
            radius={Dimensions.get('window').width * .12}
            extent={1026}
            maxZoomLevel={7} x
            clusterColor={colors.CONFIRMED_TRANSPARENT}
            clusterTextColor={"rgba(255,255,255,0)"}
        >
            {/*{*/}
            {/*    data.map((item, index) => {*/}
            {/*        if(item.confirmed === 0){*/}
            {/*            return;*/}
            {/*        }*/}
            {/*        return (*/}
            {/*            <Marker key={index}*/}
            {/*                    coordinate={{latitude: item.latitude, longitude: item.longitude}}*/}
            {/*                    pinColor={colors.CONFIRMED_TRANSPARENT}>*/}
            {/*                <MaterialCommunityIcons name={'circle'} size={12} color={colors.CONFIRMED_TRANSPARENT}/>*/}
            {/*            </Marker>*/}
            {/*        )*/}
            {/*    })*/}
            {/*}*/}
            {
                data.map((item, index) => {
                        // if ((item.latitude < region.latitude + region.latitudeDelta && item.latitude > region.latitude - region.latitudeDelta) &&
                        //     (item.longitude < region.longitude + region.longitudeDelta && item.longitude > region.longitude - region.longitudeDelta)) {
                        //     console.log('here2')
                            return (
                                <CircleMarker key={index}
                                              coordinate={{latitude: item.latitude, longitude: item.longitude}}
                                              color={colors.CONFIRMED_TRANSPARENT}
                                              value={item.confirmed}
                                />
                            )
                        // }
                    }
                )
            }
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
        // height: Dimensions.get('window').height,
        flex: 1
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

const InfMap = connect(mapStateToProps, mapDispatchToProps)(InfectionMap);
export default React.memo(InfMap);