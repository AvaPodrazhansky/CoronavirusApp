import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import {isFetchingUserLocationSelector} from './selectors/user/user-location-retrieval';
import {
    receiveUserLocationError,
    receiveUserLocationSuccess,
    requestUserLocation
} from './actions/user/user-location-retrieval';
import Spinner from './components/loading';
import * as Constants from 'expo-constants';
import colors from './constants/Colors';
import {LOCATION_PERMISSION_DENIED} from "./constants/constant-list";

const Stack = createStackNavigator();

const Root = ({
                  containerRef, initialNavigationState, requestUserLocation, receiveUserLocationSuccess,
                  receiveUserLocationError, isFetching
              }) => {
    React.useEffect(() => {

        // requestUserLocation();

        const _getLocationAsync = async () => {
            let {status} = await Permissions.askAsync(Permissions.LOCATION);
            if (status !== 'granted') {
                receiveUserLocationError(LOCATION_PERMISSION_DENIED)
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
            receiveUserLocationSuccess({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                lat: location.coords.latitude,
                lng: location.coords.longitude,
                x: location.coords.latitude,
                y: location.coords.longitude
            });
        };

        _getLocationAsync();

    }, []);

    if (isFetching === true) {
        return (
            <Spinner color={colors.LIGHT_ORANGE}/>
        )
    }

    return (
        <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
            <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
                <Stack.Navigator>
                    <Stack.Screen name="Root" component={BottomTabNavigator}/>
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});


const mapStateToProps = state => ({
    isFetching: isFetchingUserLocationSelector(state)
});

const mapDispatchToProps = dispatch => ({
    requestUserLocation: () => dispatch(requestUserLocation()),
    receiveUserLocationSuccess: location => dispatch(receiveUserLocationSuccess(location)),
    receiveUserLocationError: error => dispatch(receiveUserLocationError(error))
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);