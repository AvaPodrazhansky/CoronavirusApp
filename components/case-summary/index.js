import * as React from 'react';
import connect from "react-redux/lib/connect/connect";
import {Text, StyleSheet, View} from 'react-native';
import colors from '../../constants/Colors';
import {getCurrentCasesUSData, getIsFetchingCurrentCasesUS} from "../../selectors/dashboard/current-cases-us";
import {fetchCurrentDataUS} from '../../actions/dashboard/current-cases-us';
import isEmpty from "react-native-web/dist/vendor/react-native/isEmpty";

const CaseSummary = ({getData, data, isFetching}) => {
    React.useEffect(() => {
        if(isEmpty(data)) getData();
    }, []);

    const {
        CONFIRMED,
        DEAD
    } = colors;

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Cumulative Cases in United States</Text>
            <View style={styles.blockContainer}>
                <View style={{...styles.countBlock, borderColor: CONFIRMED}}>
                    <Text>Confirmed: {isFetching ? '--' : data['positive']}</Text>
                </View>

                <View style={{...styles.countBlock, borderColor: DEAD}}>
                    <Text>Dead: {isFetching ? '--' : data['death']}</Text>
                </View>

                {/*<View style={{...styles.countBlock, borderColor: GREEN}}>*/}
                {/*    <Text>Recovered: {data['positive']}</Text>*/}
                {/*</View>*/}

            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
    },
    header: {
        textAlign: 'center',
        marginBottom: 10
    },
    blockContainer: {
        flex: 1,
        backgroundColor: colors.WHITE,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 15
    },
    countBlock: {
        padding: 15,
        borderWidth: 2,
        borderRadius: 5
    }
});

const mapStateToProps = state => ({
    data: getCurrentCasesUSData(state),
    isFetching: getIsFetchingCurrentCasesUS(state)
});

const mapDispatchToProps = dispatch => ({
    getData: () => dispatch(fetchCurrentDataUS())
});

export default connect(mapStateToProps, mapDispatchToProps)(CaseSummary);