import {fetchGoogleData} from '../../constants/api';
import {getUserLocationData} from "../../selectors/user/user-location-retrieval";
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const REQUEST_USER_LOCATION = 'REQUEST_USER_LOCATION';
const requestUserLocation = () => {
    console.log(REQUEST_USER_LOCATION)
    return {
        type: REQUEST_USER_LOCATION
    }
};

const RECEIVE_USER_LOCATION_SUCCESS = 'RECEIVE_USER_LOCATION_SUCCESS';
const receiveUserLocationSuccess = data => {
    console.log(RECEIVE_USER_LOCATION_SUCCESS)
    return {
        type: RECEIVE_USER_LOCATION_SUCCESS,
        payload: data
    }
};

const RECEIVE_USER_LOCATION_ERROR = 'RECEIVE_USER_LOCATION_ERROR';
const receiveUserLocationError = error => {
    console.log(RECEIVE_USER_LOCATION_ERROR)
    return {
        type: RECEIVE_USER_LOCATION_ERROR,
        payload: error
    }
};

async function fetchUserLocation() {
    return async dispatch => {

        // const route = '';
        //         //
        //         // const params = {};
        //         //
        //         // dispatch(requestUserLocation());
        //         // return await fetchGoogleData(route, params)
        //         //     .then(res => res.results)
        //         //     .then(res => dispatch(receiveUserLocationSuccess(res)))
        //         //     .catch(res => dispatch(receiveUserLocationError(res)))

        dispatch(requestUserLocation());

        if (Platform.OS === 'android' && !Constants.isDevice) {
            // this.setState({
            //     errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            // });
            dispatch(receiveUserLocationError('Oops, this will not work on Sketch in an Android emulator. Try it on your device!'))
        } else {
            _getLocationAsync();
        }

        const _getLocationAsync = async () => {
            let {status} = await Permissions.askAsync(Permissions.LOCATION);
            if (status !== 'granted') {
                // this.setState({
                //     errorMessage: 'Permission to access location was denied',
                // });
                dispatch(receiveUserLocationError('Permission to access location was denied'))
            }

            let location = await Location.getCurrentPositionAsync({});
            // this.setState({location});
            console.log(location)
            dispatch(receiveUserLocationSuccess(location))
        };
    }
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