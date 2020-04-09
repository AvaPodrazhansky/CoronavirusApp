import * as React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from "react-redux";
import NHCMap from '../components/map/NHC-Map';
import {Dimensions} from "react-native";
import NHCList from '../components/lists/NHC-List';
import {
    getNHCListData,
    getNHCListErrorMessage,
    isFetchingNHCListSelector
} from "../selectors/national-health-center/nhc-list-retrieval";
import {fetchNHCList} from "../actions/national-health-center/nhc-list-retrieval";
import {
    ALLOW_LOCATION_LABEL,
    LOCATION_PERMISSION_DENIED,
    NHC_LOADING_ERROR_MESSAGE,
    NHC_RESULT_LENGTH, TRY_AGAIN_LABEL,
    USER_LOCATION_ERROR
} from "../constants/constant-list";
import Spinner from "../components/loading";
import {
    getUserLocationData,
    getUserLocationErrorMessage,
    isFetchingUserLocationSelector
} from "../selectors/user/user-location-retrieval";
import {fetchUserLocation} from "../actions/user/user-location-retrieval";

const HealthCenterScreen = ({isFetching, data, getData, NHCError, locationError, userLocation, getUserLocation}) => {

    React.useEffect(() => {
        if (data.length === 0 && !isFetching) {
            getData();
        }
    }, [userLocation]);

    const ErrorView = ({errorMessage, onPress, buttonLabel}) => {
        return (
            <View style={styles.errorView}>
                <Text style={styles.errorText}>{errorMessage}</Text>
                <Button title={buttonLabel} onPress={onPress} style={{margin: 20}}/>
            </View>
        )
    };

    if (isFetching === true) {
        return <Spinner/>
    } else if (NHCError !== null) {
        return <ErrorView errorMessage={NHC_LOADING_ERROR_MESSAGE} buttonLabel={TRY_AGAIN_LABEL} onPress={getData}/>
    } else if (locationError === LOCATION_PERMISSION_DENIED) {
        return <ErrorView errorMessage={LOCATION_PERMISSION_DENIED} buttonLabel={ALLOW_LOCATION_LABEL}
                          onPress={getUserLocation}/>
    } else if (locationError !== null) {
        return <ErrorView errorMessage={USER_LOCATION_ERROR} buttonLabel={TRY_AGAIN_LABEL} onPress={getUserLocation}/>
    }

    return (
        <View style={styles.container}>
            <View style={styles.mapContainer}>
                <NHCMap data={data}/>
            </View>
            <ScrollView style={styles.container}>
                <NHCList data={data}/>
            </ScrollView>
        </View>
    );
};

HealthCenterScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    mapContainer: {
        // flex: 1,
        height: Dimensions.get('window').height * .3,
        backgroundColor: '#fff',
        // margin: 10,
        // marginBottom: 5

    },
    errorView: {
        justifyContent: "center",
        padding: 15,
        flex: 1,
    },
    errorText: {
        textAlign: 'center',
        fontSize: 20
    }
});

const mapStateToProps = state => ({
    data: getNHCListData(state).slice(0, NHC_RESULT_LENGTH),
    isFetching: isFetchingNHCListSelector(state) || isFetchingUserLocationSelector(state),
    NHCError: getNHCListErrorMessage(state),
    locationError: getUserLocationErrorMessage(state),
    userLocation: getUserLocationData(state)
});

const mapDispatchToProps = dispatch => ({
    getData: () => dispatch(fetchNHCList()),
    getUserLocation: () => dispatch(fetchUserLocation())
});

export default connect(mapStateToProps, mapDispatchToProps)(HealthCenterScreen);
