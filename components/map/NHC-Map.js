import * as React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {setRegion} from '../../actions/summary-map/map-regions';
import connect from "react-redux/lib/connect/connect";
import {getRegion} from '../../selectors/summary-map/map-regions';
import {Text, StyleSheet} from 'react-native';
import {Marker} from 'react-native-maps';
import {getNHCListData, isFetchingNHCListSelector} from "../../selectors/national-health-center/nhc-list-retrieval";
import {fetchNHCList} from "../../actions/national-health-center/nhc-list-retrieval";
import Spinner from '../loading';

const NHCMap = ({region, setRegion, data, isFetching, getData}) => {

    // React.useEffect(() => {
    //     if (data.length === 0 && !isFetching) {
    //         getData();
    //     }
    // }, []);

    if (isFetching === true) {
        return (
            <Spinner/>
        )
    }

    // TODO: Add max zoom out
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
    isFetching: isFetchingNHCListSelector(state)
});

const mapDispatchToProps = dispatch => ({
    setRegion: region => dispatch(setRegion(region)),
    getData: () => dispatch(fetchNHCList())
});

export default connect(mapStateToProps, mapDispatchToProps)(NHCMap);