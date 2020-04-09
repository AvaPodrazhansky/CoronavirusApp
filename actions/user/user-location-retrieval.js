import * as Permissions from "expo-permissions";
import {LOCATION_PERMISSION_DENIED} from "../../constants/constant-list";
import {Platform} from "react-native";
import * as Constants from "expo-constants";
import * as Location from "expo-location";

const REQUEST_USER_LOCATION = 'REQUEST_USER_LOCATION';
const requestUserLocation = () => {
    return {
        type: REQUEST_USER_LOCATION
    }
};

const RECEIVE_USER_LOCATION_SUCCESS = 'RECEIVE_USER_LOCATION_SUCCESS';
const receiveUserLocationSuccess = data => {
    return {
        type: RECEIVE_USER_LOCATION_SUCCESS,
        payload: data
    }
};

const RECEIVE_USER_LOCATION_ERROR = 'RECEIVE_USER_LOCATION_ERROR';
const receiveUserLocationError = error => {
    return {
        type: RECEIVE_USER_LOCATION_ERROR,
        payload: error
    }
};

function fetchUserLocation(){
    return async (dispatch) => {
        let {status} = await Permissions.askAsync(Permissions.LOCATION);

        dispatch(requestUserLocation());

        if (status !== 'granted') {
            dispatch(receiveUserLocationError(LOCATION_PERMISSION_DENIED))
        }

        let location;
        if (Platform.OS === 'android' && !Constants.isDevice){
            location = {
                coords: {
                    latitude: '34.118626',
                    longitude: '-84.244175'
                }
            }
        } else {
            location = await Location.getCurrentPositionAsync({});
        }

        // let location = await Location.watchPositionAsync();
        dispatch(receiveUserLocationSuccess({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            lat: location.coords.latitude,
            lng: location.coords.longitude,
            x: location.coords.latitude,
            y: location.coords.longitude
        }));
    };
}

export {
    REQUEST_USER_LOCATION,
    requestUserLocation,
    RECEIVE_USER_LOCATION_SUCCESS,
    receiveUserLocationSuccess,
    RECEIVE_USER_LOCATION_ERROR,
    receiveUserLocationError,
    fetchUserLocation
}