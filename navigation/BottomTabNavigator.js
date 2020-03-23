import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import SymptomSurveyScreen from '../screens/SymptomSurveyScreen'
import NewsScreen from "../screens/NewsScreen";
import ChatScreen from "../screens/ChatScreen";
import HealthCenterScreen from "../screens/HealthCenterScreen";

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
                name="Self-Diagnosis"
                component={SymptomSurveyScreen}
                options={{
                    title: 'Self-Diagnosis',
                    tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="md-sad"/>,
                }}
            />
            <BottomTab.Screen
                name="Health Centers"
                component={HealthCenterScreen}
                options={{
                    title: 'Health Centers',
                    tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="md-pulse"/>,
                }}
            />
            <BottomTab.Screen
                name="News"
                component={NewsScreen}
                options={{
                    title: 'News',
                    tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="ios-today"/>,
                }}
            />
            <BottomTab.Screen
                name="Chat"
                component={ChatScreen}
                options={{
                    title: 'Chat',
                    tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="md-chatboxes"/>,
                }}
            />
        </BottomTab.Navigator>
    );
}

function getHeaderTitle(route) {
    const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

    switch (routeName) {
        case 'Home':
            return 'COVID-19 Data';
        case 'Map':
            return 'COVID-19 World View';
        case 'Self-Diagnosis':
            return 'COVID-19 Self-Diagnosis';
        case 'Health Centers':
            return 'National Health Centers';
        case 'News':
            return 'COVID-19 Latest News';
        case 'Chat':
            return 'COVID-19 Chatroom';
    }
}
