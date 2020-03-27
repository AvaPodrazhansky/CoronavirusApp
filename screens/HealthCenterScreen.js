import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from "react-redux";
import NHCMap from '../components/map/NHC-Map';
import { Dimensions } from "react-native";
import NHCList from '../components/lists/NHC-List';
import {getNHCListData, isFetchingNHCListSelector} from "../selectors/national-health-center/nhc-list-retrieval";
import {fetchNHCList} from "../actions/national-health-center/nhc-list-retrieval";
import {NHC_RESULT_LENGTH} from "../constants/constant-list";
import Spinner from "../components/loading";

const HealthCenterScreen = ({isFetching, data, getData}) => {

    React.useEffect(() => {
        if (data.length === 0 && !isFetching){
            getData();
        }
    }, []);

    if(isFetching === true){
        return (
            <Spinner/>
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

    }
});

const mapStateToProps = state => ({
    data: getNHCListData(state).slice(0,NHC_RESULT_LENGTH),
    isFetching: isFetchingNHCListSelector(state)
});

const mapDispatchToProps = dispatch => ({
    getData: () => dispatch(fetchNHCList())
});

export default connect(mapStateToProps, mapDispatchToProps)(HealthCenterScreen);
