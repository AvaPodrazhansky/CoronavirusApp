/**
 * @file File with the Clinics Map component.
 * @author Jay Bhatt
 */

import { Dimensions, StyleSheet, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserLocation } from "../../slices/userLocationSlice";
import BasicDialog from "../dialog/BasicDialog";
import STRINGS from "../../utils/strings";

const ClinicsMap = () => {
    const dispatch = useDispatch();

    const userLocation = useSelector((state) => state.userLocation);

    useEffect(() => {
        dispatch(fetchUserLocation());
    }, []);

    if (userLocation.status === STRINGS.status.loading) {
        return <View></View>;
    } else if (userLocation.status === STRINGS.status.rejected) {
        return (
            <BasicDialog
                initialVisibility={true}
                title={STRINGS.userLocation.dialogTitleError}
                bodyText={userLocation.errorMessage}
            />
        );
    } else {
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    region={userLocation.userLocation}
                    provider={PROVIDER_GOOGLE}
                >
                    <Marker
                        coordinate={userLocation.userLocation}
                        title="Marker"
                    />
                </MapView>
                {/*<Button title="Get Location" onPress={userLocation} />*/}
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
});

export default ClinicsMap;
