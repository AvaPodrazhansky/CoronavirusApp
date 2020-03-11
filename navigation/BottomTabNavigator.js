import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import SymptomSurveyScreen from '../screens/SymptomSurveyScreen'

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({navigation, route}) {
    // Set the header title on the parent stack navigator depending on the
    // currently active tab. Learn more in the documentation:
    // https://reactnavigation.org/docs/en/screen-options-resolution.html
    navigation.setOptions({headerTitle: getHeaderTitle(route)});

    return (
        <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
            <BottomTab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Home',
                    tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="md-home"/>,
                }}
            />
            <BottomTab.Screen
                name="Map"
                component={MapScreen}
                options={{
                    title: 'Map',
                    tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="md-globe"/>,
                }}
            />
            <BottomTab.Screen
                name="SymptomSurvey"
                component={SymptomSurveyScreen}
                options={{
                    title: 'Survey',
                    tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="md-sad"/>,
                }}
            />
        </BottomTab.Navigator>
    );
}

function getHeaderTitle(route) {
    const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

    switch (routeName) {
        case 'Home':
            return 'How to get started';
        case 'Map':
            return 'COVID-19 World View';
        case 'SymptomSurvey':
            return 'Symptom Survey';
    }
}
