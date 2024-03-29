import * as React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import StateList from '../components/lists/State-List';
import CaseSummaryCard from '../components/cards/CaseSummaryCard';
import UnitedStatesMap from "../components/map/UnitedStatesMap";
import {Card} from "react-native-elements";
import {
    getCurrentCasesByStateError,
    getIsFetchingCurrentCasesByState
} from "../selectors/dashboard/current-cases-by-state";
import {getCurrentCasesUSError, getIsFetchingCurrentCasesUS} from "../selectors/dashboard/current-cases-us";
import {fetchCurrentDataByState} from "../actions/dashboard/current-cases-by-state";
import {fetchCurrentDataUS} from "../actions/dashboard/current-cases-us";
import RefreshButton from '../components/button/refresh-button';
import Spinner from '../components/loading';

const HomeScreen = ({
                        toSurvey, stateDataLoadingError, USDataLoadingError, getStateData, getUSData,
                        isFetching
                    }) => {

    React.useEffect(() => {
        // if(data === {}) {
        getStateData();
        getUSData();
        // }
    }, []);

    if (isFetching) {
        return <Spinner/>
    } else
    if (stateDataLoadingError) {
        return (<RefreshButton onPress={getStateData} isFetching={isFetching}/>)
    } else if (USDataLoadingError) {
        return (<RefreshButton onPress={getUSData} isFetching={isFetching}/>)
    }

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
    }
});

const mapStateToProps = state => ({
    stateDataLoadingError: getCurrentCasesByStateError(state) !== null,
    USDataLoadingError: getCurrentCasesUSError(state) !== null,
    isFetching: (getIsFetchingCurrentCasesByState(state) || getIsFetchingCurrentCasesUS(state))
});

const mapDispatchToProps = dispatch => ({
    getStateData: () => dispatch(fetchCurrentDataByState()),
    getUSData: () => dispatch(fetchCurrentDataUS())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
