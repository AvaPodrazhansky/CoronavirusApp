import * as React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from "react-redux";
import NHCMap from '../components/map/NHC-Map';
import { Dimensions } from "react-native";
import NHCList from '../components/lists/NHC-List';
import {
    getNHCListData,
    getNHCListErrorMessage,
    isFetchingNHCListSelector
} from "../selectors/national-health-center/nhc-list-retrieval";
import {fetchNHCList} from "../actions/national-health-center/nhc-list-retrieval";
import {NHC_LOADING_ERROR_MESSAGE, NHC_RESULT_LENGTH} from "../constants/constant-list";
import Spinner from "../components/loading";

const HealthCenterScreen = ({isFetching, data, getData, error}) => {

    React.useEffect(() => {
        if (data.length === 0 && !isFetching){
            getData();
        }
    }, []);

    if(isFetching === true){
        return (
            <Spinner/>
        )
    } else if (error !== null) {
        return (
            <View style={styles.errorView}>
                <Text>{NHC_LOADING_ERROR_MESSAGE}</Text>
                <Button title={'Try Again'} onPress={getData}/>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.mapContainer}>
                <NHCMap data={data}/>
            </View>
            <ScrollView style={styles.container}>
                <NHCList data={data}/>
            </ScrollView>
        </View>
    );
};

HealthCenterScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    mapContainer: {
        // flex: 1,
        height: Dimensions.get('window').height * .3,
        backgroundColor: '#fff',
        // margin: 10,
        // marginBottom: 5

    },
    errorView: {
        justifyContent: "space-around",
        padding: 10,
        flex: 1,
    }
});

const mapStateToProps = state => ({
    data: getNHCListData(state).slice(0,NHC_RESULT_LENGTH),
    isFetching: isFetchingNHCListSelector(state),
    error: getNHCListErrorMessage(state)
});

const mapDispatchToProps = dispatch => ({
    getData: () => dispatch(fetchNHCList())
});

export default connect(mapStateToProps, mapDispatchToProps)(HealthCenterScreen);
