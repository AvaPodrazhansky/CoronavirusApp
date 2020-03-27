import * as React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {SplashScreen} from 'expo';
import * as Font from 'expo-font';
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createStore, applyMiddleware} from 'redux';
import {Provider, connect} from 'react-redux';
import allReducers from './reducers';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import useLinking from './navigation/useLinking';
import thunk, {ThunkDispatch} from "redux-thunk";
// import {isFetchingNHCListSelector} from "./selectors/national-health-center/nhc-list-retrieval";
// import {getUserLocationData} from "./selectors/user/user-location-retrieval";
// import {fetchNHCList} from "./actions/national-health-center/nhc-list-retrieval";
// import {
//     receiveUserLocationError,
//     receiveUserLocationSuccess,
//     requestUserLocation
// } from "./actions/user/user-location-retrieval";
import * as Location from 'expo-location';
import Root from "./Root";

// const Stack = createStackNavigator();

const store = createStore(allReducers, applyMiddleware(thunk));

export default function App(props){
    const [isLoadingComplete, setLoadingComplete] = React.useState(false);
    const [initialNavigationState, setInitialNavigationState] = React.useState();
    const containerRef = React.useRef();
    const {getInitialState} = useLinking(containerRef);

    // Load any resources or data that we need prior to rendering the app
    React.useEffect(() => {

        // async function getLocationAsync() {
        //     // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
        //     const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
        //     if (status === 'granted') {
        //         return Location.getCurrentPositionAsync({ enableHighAccuracy: true });
        //     } else {
        //         throw new Error('Location permission not granted');
        //     }
        // }

        async function loadResourcesAndDataAsync() {
            try {
                SplashScreen.preventAutoHide();

                // Load our initial navigation state
                setInitialNavigationState(await getInitialState());

                // Load fonts
                await Font.loadAsync({
                    ...Ionicons.font,
                    'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
                    ...MaterialCommunityIcons.font
                });

                // await getLocationAsync();

            } catch (e) {
                // We might want to provide this error information to an error reporting service
                console.warn(e);
            } finally {
                setLoadingComplete(true);
                SplashScreen.hide();
            }
        }

        loadResourcesAndDataAsync();
    }, []);

    if (!isLoadingComplete && !props.skipLoadingScreen) {
        return null;
    } else {
        return (
            <Provider store={store}>
                {/*<View style={styles.container}>*/}
                {/*    {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}*/}
                {/*    <NavigationContainer ref={containerRef} initialState={initialNavigationState}>*/}
                {/*        <Stack.Navigator>*/}
                {/*            <Stack.Screen name="Root" component={BottomTabNavigator}/>*/}
                {/*        </Stack.Navigator>*/}
                {/*    </NavigationContainer>*/}
                {/*</View>*/}
                <Root initialNavigationState={initialNavigationState} containerRef={containerRef}/>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

// const mapStateToProps = (state=allReducers) => ({
//
// });
//
// const mapDispatchToProps = dispatch => ({
//     requestUserLocation: () => dispatch(requestUserLocation()),
//     receiveUserLocationSuccess: location => dispatch(receiveUserLocationSuccess(location)),
//     receiveUserLocationError: error => dispatch(receiveUserLocationError(error))
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);