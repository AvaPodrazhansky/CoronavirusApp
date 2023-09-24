/**
 * @file File with the Tabs component.
 * @author Jay Bhatt
 */

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "../screens/HomeScreen.js";
import DiagnosisScreen from "../screens/DiagnosisScreen";
import ClinicsScreen from "../screens/ClinicsScreen";
import NewsScreen from "../screens/NewsScreen";
import ChatBotScreen from "../screens/ChatBotScreen";

// Ensures proper rendering (and subsequent navigation) of the bottom bar tabs
const BottomTab = createBottomTabNavigator();

/**
 * The Tabs component.
 *
 * @returns {JSX.Element} A component that represents the collection of all the
 *                        Bottom Bar tabs.
 * @constructor
 */
const Tabs = () => {
    return (
        <BottomTab.Navigator initialRouteName="Home">
            <BottomTab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="home"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Diagnosis"
                component={DiagnosisScreen}
                options={{
                    tabBarLabel: "Diagnosis",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="square-edit-outline"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Clinics"
                component={ClinicsScreen}
                options={{
                    tabBarLabel: "Clinics",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="heart-pulse"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <BottomTab.Screen
                name="News"
                component={NewsScreen}
                options={{
                    tabBarLabel: "News",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="newspaper"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Chat Bot"
                component={ChatBotScreen}
                options={{
                    tabBarLabel: "Chat Bot",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="chat"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
};

export default Tabs;
