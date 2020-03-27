import {ListItem} from 'react-native-elements';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import connect from 'react-redux/lib/connect/connect';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import colors from '../../constants/Colors';
import {isFetchingNHCListSelector} from '../../selectors/national-health-center/nhc-list-retrieval';
import {fetchNHCList} from "../../actions/national-health-center/nhc-list-retrieval";
import {getUserLocationData} from "../../selectors/user/user-location-retrieval";
import {MILES_ABBREVIATION} from "../../constants/constant-list";

const IconView = ({name, text}) => {
    return (
        <View style={styles.iconView}>
            <MaterialCommunityIcons name={name} color={colors.LIGHT_BLUE} size={25}/>
            <Text style={{color: colors.LIGHT_BLUE}}>{text}</Text>
        </View>
    )
};


const NHCList = ({isFetching, data, getData, userLocation}) => {
    React.useEffect(() => {
        if (data.length === 0 && !isFetching) {
            getData();
        }
    }, []);

    if (isFetching === true) {
        return (
            <Text>Loading</Text>
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


    return (
        <View>
            {
                data.map((item, i) => (
                    <ListItem
                        key={i}
                        title={item.name}
                        subtitle={item.vicinity + '\n' +
                        _distance(item.geometry.location.lat, item.geometry.location.lng) + ' ' + MILES_ABBREVIATION}
                        rightIcon={
                            <View style={styles.iconList}>
                                <IconView name={'phone'} text={'Call'}/>
                                <IconView name={'web'} text={'Website'}/>
                            </View>}
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
    userLocation: getUserLocationData(state)
});

const mapDispatchToProps = dispatch => ({
    getData: () => dispatch(fetchNHCList())
});

export default connect(mapStateToProps, mapDispatchToProps)(NHCList);