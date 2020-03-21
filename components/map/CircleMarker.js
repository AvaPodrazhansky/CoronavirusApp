import React from 'react';
import { Marker } from 'react-native-maps';
import colors from "../../constants/Colors";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import PropTypes from 'prop-types';

function CircleMarker(props) {
    const {coordinate, size, color, value} = props;
    if(value === 0){
        return;
    }
    return (
        <Marker
                coordinate={coordinate}
                // pinColor={colors.CONFIRMED}
                tracksViewChanges={false}
        >
            <MaterialCommunityIcons name={'circle'} size={size || 12} color={color}/>
        </Marker>

    );
}

CircleMarker.propTypes = {
    coordinate: PropTypes.object.isRequired,
    size: PropTypes.number,
    color: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
};

export default React.memo(CircleMarker);
