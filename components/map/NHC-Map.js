import * as React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {setRegion} from '../../actions/summary-map/map-regions';
import connect from "react-redux/lib/connect/connect";
import {getRegion} from '../../selectors/summary-map/map-regions';
import {Text, StyleSheet} from 'react-native';
import {Marker} from 'react-native-maps';
import {getNHCListData} from "../../selectors/national-health-center/nhc-list-retrieval";

const NHCMap = ({region, setRegion, data}) => {
    return (
        <MapView
            provider={PROVIDER_GOOGLE}
            initialRegion={region}
            onRegionChange={setRegion}
            style={styles.mapStyle}
        >
            {
                data.map((item, index) => (
                    <Marker key={index}
                            coordinate={{
                                latitude: item.geometry.location.lat,
                                longitude: item.geometry.location.lng
                            }}/>
                ))
            }
        </MapView>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {
        flex: 1,
        borderRadius: 10,
        borderWidth: 1
    },
});

const mapStateToProps = state => ({
    region: getRegion(state),
    data: getNHCListData(state)
});

const mapDispatchToProps = dispatch => ({
    setRegion: region => dispatch(setRegion(region))
});

export default connect(mapStateToProps, mapDispatchToProps)(NHCMap);