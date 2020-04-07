import * as React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import StateList from '../components/lists/State-List';
import CaseSummaryCard from '../components/cards/CaseSummaryCard';
import UnitedStatesMap from "../components/map/UnitedStatesMap";
import {Card} from "react-native-elements";

//TODO: Change view with survey page button. It hides content at the bottom of the scroll view
const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <CaseSummaryCard/>
                <UnitedStatesMap/>
                <Card>
                    <StateList/>
                </Card>
            </ScrollView>
        </View>
    );
};

HomeScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        paddingTop: 10,
    },
});

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, props) => ({
    toSurvey: () => {
        console.log(props)
        props.navigation.navigate('Diagnosis')
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
