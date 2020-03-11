import * as React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import {increment} from "../actions/symptom-survey/symptoms";
import {getCount} from "../selectors/symptom-survey/symptoms";
import InfectionMap from "../components/InfectionMap";
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
    count: getCount(state),
});

const mapDispatchToProps = (dispatch, props) => ({
    increment: () => dispatch(increment()),
    toSurvey: () => props.navigation.navigate('SymptomSurvey')
});

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
