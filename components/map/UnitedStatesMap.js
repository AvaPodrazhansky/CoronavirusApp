import * as React from 'react';
import MapView, {Polygon} from 'react-native-maps';
import connect from "react-redux/lib/connect/connect";
import {StyleSheet} from 'react-native';
import {Dimensions} from "react-native";
import myMapStyle from './united-states-map-style';
import {stateOverlays} from "./overlays/state-polygon-overlay-points";
import {
    getCurrentCasesByStateData,
    getMaxConfirmedValue,
    getMaxDeathValue, getMaxRecoveredValue
} from "../../selectors/dashboard/current-cases-by-state";
import {CONFIRMED_TYPE, DEATHS_TYPE, RECOVERED_TYPE} from "../../constants/constant-list";
import {getFocusedCaseType} from "../../selectors/dashboard/current-cases-us";
import colors from '../../constants/Colors';

const UnitedStatesMap = ({data, focusedCaseType, maxConfirmed, maxDeath, maxRecovered}) => {

    function _getColor(item){
        let color, value;
        switch(focusedCaseType){
            case CONFIRMED_TYPE:
                value = item.confirmed / maxConfirmed;
                color = colors.CONFIRMED;
                break;
            case DEATHS_TYPE:
                value = item.deaths / maxDeath;
                color = colors.DEAD;
                break;
            case RECOVERED_TYPE:
                value = item.recovered / maxRecovered;
                color = colors.RECOVERED;
                break;
        }

        value = Math.sqrt(value);
        value = Math.round(value * 255);
        return color + (value < 16 ? '0' + value.toString(16) : value.toString(16)).toUpperCase();

    }
    return (
        <MapView
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

            {data.map((item, index) => {
                if(stateOverlays[item.state] !== undefined){
                    return (
                        <Polygon coordinates={stateOverlays[item.state].point} key={index}
                                 strokeColor={"rgb(73,73,73)"}
                                 fillColor={_getColor(item)}
                                 strokeWidth={1}
                                 onPress={() => console.log(item.state)}/>
                    )
                } else {
                    return null;
                }

            })}
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
        height: Dimensions.get('window').height * .2,
        flex: 1,
        margin: 15
        // ...StyleSheet.absoluteFillObject,


    },
});

const mapStateToProps = state => ({
    data: getCurrentCasesByStateData(state),
    focusedCaseType: getFocusedCaseType(state),
    maxConfirmed: getMaxConfirmedValue(state),
    maxDeath: getMaxDeathValue(state),
    maxRecovered: getMaxRecoveredValue(state)
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UnitedStatesMap);