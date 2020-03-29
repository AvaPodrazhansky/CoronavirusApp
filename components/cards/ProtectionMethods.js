import * as React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Card, ListItem} from 'react-native-elements';
import {
    PROTECTION_METHODS_TITLE,
    protectionMethods
} from "../../constants/constant-list";
import PropTypes from "prop-types";
import {Entypo, FontAwesome, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    contentContainer: {
        paddingTop: 30,
    },
    title: {
        fontSize: 17
    },
    listText: {}
});

ProtectionMethods.propTypes = {
    title: PropTypes.string,

};
