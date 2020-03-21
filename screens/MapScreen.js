import * as React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import InfectionMap from "../components/map/InfectionMap";
import View from "react-native-web/src/exports/View";

const MapScreen = ({increment, count, toSurvey}) => {
    return (
            <InfectionMap/>
    );
};

MapScreen.navigationOptions = {
    header: null,
};


const mapStateToProps = state => ({
});

const mapDispatchToProps = (dispatch, props) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
