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
import STRINGS from "../utils/strings";

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
                name={STRINGS.home}
                component={HomeScreen}
                options={{
                    tabBarLabel: STRINGS.home,
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
                name={STRINGS.diagnosis}
                component={DiagnosisScreen}
                options={{
                    tabBarLabel: STRINGS.diagnosis,
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
                name={STRINGS.clinics}
                component={ClinicsScreen}
                options={{
                    tabBarLabel: STRINGS.clinics,
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
                name={STRINGS.news}
                component={NewsScreen}
                options={{
                    tabBarLabel: STRINGS.news,
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
                name={STRINGS.chatBot}
                component={ChatBotScreen}
                options={{
                    tabBarLabel: STRINGS.chatBot,
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
