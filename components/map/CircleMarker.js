import React from 'react';
import { Marker } from 'react-native-maps';
import colors from "../../constants/Colors";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import PropTypes from 'prop-types';

function CircleMarker(props) {
    const {coord, size, color} = props;
    return (
        <Marker
                coordinate={coord}
                pinColor={colors.CONFIRMED}
                tracksViewChanges={false}
        >
            <MaterialCommunityIcons name={'circle'} size={size || 12} color={color}/>
        </Marker>

    );
}

CircleMarker.propTypes = {
    coord: PropTypes.object.isRequired,
    size: PropTypes.number,
    color: PropTypes.string.isRequired
};

export default React.memo(CircleMarker);
