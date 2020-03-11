import * as React from 'react';
import MapView from 'react-native-maps';
import {setRegion} from '../actions/summary-map/map-regions';
import connect from "react-redux/lib/connect/connect";
import {getRegion} from '../selectors/summary-map/map-regions';

const InfectionMap = ({region, setRegion}) => {

    return (
        <MapView
            region={region}
            onRegionChange={setRegion}
        />
    );


};

const mapStateToProps = state => ({
    region: getRegion(state)
});

const mapDispatchToProps = dispatch => ({
    setRegion: region => dispatch(setRegion(region))
});

export default connect(mapStateToProps, mapDispatchToProps)(InfectionMap);