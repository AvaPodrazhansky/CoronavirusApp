import {ListItem} from "react-native-elements";
import {Linking, StyleSheet, Text, View} from "react-native";
import React from "react";
import PropTypes from 'prop-types';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import colors from "../../constants/Colors";
import {CALL_LABEL, WEBSITE_LABEL} from "../../constants/constant-list";

// TODO: Add version to short circuit data if one is not loaded yet
const IconView = ({name, text, onIconPress}) => {
    return (
        <View style={styles.iconView}>
            <MaterialCommunityIcons name={name} color={colors.LIGHT_BLUE} size={25} onPress={onIconPress}/>
            <Text style={{color: colors.LIGHT_BLUE}}>{text}</Text>
        </View>
    )
};

const NHCListItem = ({title, address, phoneNumber, website, openHours, onPress}) => {
    return (
        <ListItem
            title={title}
            subtitle={address || ''
                // + '\n' +
                // // TODO: Possibly get rid of this. It doesn't look like this is useful to the user
                // (item.opening_hours.open_now ? OPEN_NOW : CLOSED)
                // _distance(item.geometry.location.lat, item.geometry.location.lng) + ' ' + MILES_ABBREVIATION
            }
            rightIcon={
                // TODO: Add if statement for onPress
                <View style={styles.iconList}>
                    <IconView name={'phone'} text={CALL_LABEL}
                              onIconPress={() => Linking.openURL(`tel:${phoneNumber}`)}/>
                    <IconView name={'web'} text={WEBSITE_LABEL}
                              onIconPress={() => Linking.openURL(website)}/>
                </View>
            }
            onPress={onPress || null}
            // leftIcon={{ name: item.icon }}
            topDivider
            bottomDivider
            // chevron
        />
    )
};

NHCListItem.propTypes = {
    title: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string,
    website: PropTypes.string,
    openHours: PropTypes.object
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconList: {
        flexDirection: 'row',
    },
    iconView: {
        justifyContent: "center",
        alignItems: "center",
        margin: 5
    },
    iconTextStyle: {
        color: colors.LIGHT_BLUE
    }
});

export default NHCListItem;

// const lat1 = userLocation.lat;
// const lon1 = userLocation.lng;
//
// //TODO: Fix this
// function _distance(lat2, lon2, unit) {
//     if ((lat1 === lat2) && (lon1 === lon2)) {
//         return 0;
//     } else {
//         let radlat1 = Math.PI * lat1 / 180;
//         let radlat2 = Math.PI * lat2 / 180;
//         let theta = lon1 - lon2;
//         let radtheta = Math.PI * theta / 180;
//         let dist = Math.sin(radlat1) * Math.sin(radlat2) +
//             Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
//         if (dist > 1) {
//             dist = 1;
//         }
//         dist = Math.acos(dist);
//         dist = dist * 180 / Math.PI;
//         dist = dist * 60 * 1.1515;
//         if (unit == "K") {
//             dist = dist * 1.609344
//         }
//         if (unit == "N") {
//             dist = dist * 0.8684
//         }
//         return (dist).toFixed(2);
//     }
// }
