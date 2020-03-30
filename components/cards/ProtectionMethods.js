import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Card, ListItem} from 'react-native-elements';
import {
    PROTECTION_METHODS_TITLE,
    protectionMethods
} from "../../constants/constant-list";
import {FontAwesome, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import styles from './styles';

export default function ProtectionMethods() {

    const iconArray = [
        <FontAwesome name={'home'} size={25}/>,
        <Ionicons name={'md-people'} size={25}/>,
        <Ionicons name={'md-hand'} size={25}/>, // possible 'ios-person
        <MaterialCommunityIcons name={'face'} size={25}/>,
        <Ionicons name={'ios-person'} size={25}/>, // possible 'ios-person
        <Ionicons name={'ios-trash'} size={25}/>,
        < MaterialCommunityIcons name={'medical-bag'} size={25}/>,
        < MaterialCommunityIcons name={'spray'} size={25}/>,
    ];

    return (
        <Card title={PROTECTION_METHODS_TITLE} titleStyle={styles.title}>
            {
                protectionMethods.map((item, i) => {
                    return (
                        <ListItem
                            key={'protection' + i}
                            title={item}
                            leftIcon={iconArray[i]}
                            style={styles.listText}
                        />
                    );
                })
            }
        </Card>
    )
};