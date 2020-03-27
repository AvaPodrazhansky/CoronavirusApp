import {ListItem} from 'react-native-elements';
import {ActivityIndicator, Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from "@react-navigation/native";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import {createStackNavigator} from "@react-navigation/stack";
import * as Constants from "expo-constants";
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import {getUserLocationData, isFetchingUserLocationSelector} from "./selectors/user/user-location-retrieval";
import {
    receiveUserLocationError,
    receiveUserLocationSuccess,
    requestUserLocation
} from "./actions/user/user-location-retrieval";
import Spinner from './components/loading';

const Stack = createStackNavigator();

const Root = ({
                  containerRef, initialNavigationState,
                  userLocation, requestUserLocation, receiveUserLocationSuccess, receiveUserLocationError, isFetching
              }) => {
    React.useEffect(() => {

        requestUserLocation();

        const _getLocationAsync = async () => {
            let {status} = await Permissions.askAsync(Permissions.LOCATION);
            if (status !== 'granted') {
                receiveUserLocationError('Permission to access location was denied')
            }

            let location = await Location.getCurrentPositionAsync({});
            // let location = await Location.watchPositionAsync();
            receiveUserLocationSuccess({
                ...location,
                lat: location.latitude,
                lng: location.longitude
            });
        };

        // if (Platform.OS === 'android' && !Constants.isDevice) {
        //     // this.setState({
        //     //     errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
        //     // });
        //     receiveUserLocationError('Oops, this will not work on Sketch in an Android emulator. Try it on your device!')
        // } else {
        _getLocationAsync();
        // }

    }, []);

    if (isFetching === true) {
        // return <Text>Loading Location</Text>
        return (
            <Spinner/>
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
    userLocation: getUserLocationData(state),
    isFetching: isFetchingUserLocationSelector(state)
});

const mapDispatchToProps = dispatch => ({
    requestUserLocation: () => dispatch(requestUserLocation()),
    receiveUserLocationSuccess: location => dispatch(receiveUserLocationSuccess(location)),
    receiveUserLocationError: error => dispatch(receiveUserLocationError(error))
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);