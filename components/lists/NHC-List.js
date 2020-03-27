import {ListItem} from 'react-native-elements';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import connect from 'react-redux/lib/connect/connect';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import colors from '../../constants/Colors';
import {isFetchingNHCListSelector} from '../../selectors/national-health-center/nhc-list-retrieval';
import {getUserLocationData} from "../../selectors/user/user-location-retrieval";
import {CLOSED, MILES_ABBREVIATION, OPEN_NOW} from '../../constants/constant-list';
import Spinner from '../loading';
import {Linking} from 'react-native'
import {fetchGoogleData} from "../../constants/api";
import {getNHCDetailsData, isFetchingNHCDetailsSelector} from "../../selectors/national-health-center/nhc-list-details";
import {fetchNHCListDetails} from "../../actions/national-health-center/nhc-list-details";

const NHCList = ({isFetching, data, userLocation, toDialer, toExternalSite, isFetchingDetails, getDataDetails, detailData}) => {

    React.useEffect(() => {
        // if (data.length === 0 && !isFetching){
        //     getData();
        // } else
        if (!isFetching && !isFetchingDetails && (detailData.length === 0 || detailData.length !== data.length)) {
            getDataDetails();
        }
    }, []);

    if (isFetching === true) {
        return (
            <Spinner/>
        )
    }


    const lat1 = userLocation.lat;
    const lon1 = userLocation.lng;

    //TODO: Fix this
    function _distance(lat2, lon2, unit) {
        if ((lat1 === lat2) && (lon1 === lon2)) {
            return 0;
        } else {
            let radlat1 = Math.PI * lat1 / 180;
            let radlat2 = Math.PI * lat2 / 180;
            let theta = lon1 - lon2;
            let radtheta = Math.PI * theta / 180;
            let dist = Math.sin(radlat1) * Math.sin(radlat2) +
                Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180 / Math.PI;
            dist = dist * 60 * 1.1515;
            if (unit == "K") {
                dist = dist * 1.609344
            }
            if (unit == "N") {
                dist = dist * 0.8684
            }
            return (dist).toFixed(2);
        }
    }

    function _formatAddress(address) {
        let result = address.split(",");
        return result[0]
    }

    const IconView = ({name, text, onIconPress}) => {
        return (
            <View style={styles.iconView}>
                <MaterialCommunityIcons name={name} color={colors.LIGHT_BLUE} size={25} onPress={onIconPress}/>
                <Text style={{color: colors.LIGHT_BLUE}}>{text}</Text>
            </View>
        )
    };

    async function fetchPlaceData(place_id) {
        return await fetchGoogleData('https://maps.googleapis.com/maps/api/place/details/json?', {place_id})
    }

    const IconList = async (place_id) => {

        const info = await fetchGoogleData('https://maps.googleapis.com/maps/api/place/details/json?', {place_id})

        return (
            <View style={styles.iconList}>
                <IconView name={'phone'} text={'Call'} onIconPress={() => toDialer(info.formatted_phone_number)}/>
                <IconView name={'web'} text={'Website'} onIconPress={() => toExternalSite(info.url)}/>
            </View>
        )
    };

    return (
        <View>
            {
                data.map((item, i) => (
                    <ListItem
                        key={i}
                        title={item.name}
                        subtitle={_formatAddress(item.formatted_address)
                        + '\n' +
                        // TODO: Possibly get rid of this. It doesn't look like this is useful to the user
                        (item.open_now ? OPEN_NOW : CLOSED)
                            // _distance(item.geometry.location.lat, item.geometry.location.lng) + ' ' + MILES_ABBREVIATION
                        }
                        rightIcon={
                            // TODO: Add if statement for onPress
                            <View style={styles.iconList}>
                                <IconView name={'phone'} text={'Call'}
                                          onIconPress={() => toDialer(item.formatted_phone_number)}/>
                                <IconView name={'web'} text={'Website'} onIconPress={() => toExternalSite(item.url)}/>
                            </View>
                        }
                        // leftIcon={{ name: item.icon }}
                        topDivider
                        bottomDivider
                        // chevron
                    />
                ))
            }
        </View>
    );
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

const mapStateToProps = state => ({
    isFetching: isFetchingNHCListSelector(state),
    userLocation: getUserLocationData(state),
    isFetchingDetails: isFetchingNHCDetailsSelector(state),
    detailData: getNHCDetailsData(state)
});

const mapDispatchToProps = dispatch => ({
    toDialer: phoneNumber => Linking.openURL(`tel:${phoneNumber}`),
    toExternalSite: url => Linking.openURL(url),
    getDataDetails: () => dispatch(fetchNHCListDetails())
});

export default connect(mapStateToProps, mapDispatchToProps)(NHCList);