import * as React from 'react';
import MapView, {Overlay, Polygon, PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import connect from "react-redux/lib/connect/connect";
import {StyleSheet} from 'react-native';
import {Dimensions} from "react-native";
import myMapStyle from './united-states-map-style';
import {stateOverlays} from "./overlays/state-polygon-overlay-points";
import MapPolygon from "react-native-maps/lib/components/MapPolygon";
import {getCurrentCasesByStateData} from "../../selectors/dashboard/current-cases-by-state";
import {statePopulations} from "../../constants/constant-list";

const UnitedStatesMap = ({data}) => {

    // function _getOpacity(item) {
    //     return item.confirmed / statePopulations[item.state] * 100
    // }

    // const item = data[0]
    // console.log(item)
    // console.log(stateOverlays[item.state])
    return (
        <MapView
            provider={PROVIDER_GOOGLE}
            region={
                {
                    "latitude": 37.365526186827243,
                    "longitude": -94.13053995370865,
                    "latitudeDelta": 35,
                    "longitudeDelta": 15.31902597844601,
                }
            }
            style={styles.mapStyle}
            customMapStyle={myMapStyle}
            maxZoomLevel={15}
            // minZoomLevel={15}
            scrollEnabled={false}
        >
            {/*{stateOverlays.map((item, index) => {*/}
            {/*    return (*/}
            {/*        <Polygon coordinates={item.point} key={index}*/}
            {/*                 strokeColor={"rgba(255,0,0,0.31)"}*/}
            {/*                 fillColor={"rgba(255,0,0,0.5)"}*/}
            {/*                 strokeWidth={1}*/}
            {/*        onPress={() => console.log(item.name)}/>*/}
            {/*    )*/}
            {/*})}*/}

            {/*{data.map((item, index) => {*/}
            {/*    return (*/}
            {/*        <Polygon coordinates={stateOverlays[item.state].point} key={index}*/}
            {/*                 strokeColor={"rgba(255,0,0,0.31)"}*/}
            {/*                 fillColor={"rgba(255,0,0,0.5)"}*/}
            {/*                 strokeWidth={1}*/}
            {/*                 onPress={() => console.log(item.state)}/>*/}
            {/*    )*/}
            {/*})}*/}
            {/*<Polygon coordinates={stateOverlays[item.state].point} key={1}*/}
            {/*         strokeColor={() => {*/}
            {/*             // const opacity = _getOpacity(item);*/}
            {/*             return "rgba(255,0,0," + _getOpacity(item) + ")"*/}
            {/*         }}*/}
            {/*         fillColor={"rgba(255,0,0,0.5)"}*/}
            {/*         strokeWidth={1}*/}
            {/*         onPress={() => console.log(item.state)}/>*/}
        </MapView>
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
    data: getCurrentCasesByStateData(state)
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UnitedStatesMap);