import * as React from 'react';
import connect from "react-redux/lib/connect/connect";
import {Text, StyleSheet, View} from 'react-native';
import colors from '../../constants/Colors';
import {getCurrentCasesUSData, getIsFetchingCurrentCasesUS} from "../../selectors/dashboard/current-cases-us";
import {fetchCurrentDataUS} from '../../actions/dashboard/current-cases-us';
import {Card} from "react-native-elements";
import styles from "./styles";
import {CONFIRMED, CUMULATIVE_CASES_HEADER, DEAD, RECOVERED} from "../../constants/constant-list";

const CaseSummaryCard = ({getData, data, isFetching}) => {
    React.useEffect(() => {
        getData();
    }, []);

    return (
        <Card containerStyle={styles.container}
              title={CUMULATIVE_CASES_HEADER}
              titleStyle={styles.title}
        >
            <View style={styles2.blockContainer}>
                <View style={{...styles2.countBlock, borderColor: colors.CONFIRMED}}>
                    <Text>{CONFIRMED}</Text>
                    <Text>{isFetching ? '--' : data.confirmed}</Text>
                </View>

                <View style={{...styles2.countBlock, borderColor: colors.DEAD}}>
                    <Text>{DEAD}</Text>
                    <Text>{isFetching ? '--' : data.deaths}</Text>
                </View>

                <View style={{...styles2.countBlock, borderColor: colors.RECOVERED}}>
                    <Text>{RECOVERED}</Text>
                    <Text>{isFetching ? '--' : data.recovered}</Text>
                </View>

            </View>
        </Card>
    );

};

const styles2 = StyleSheet.create({
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
        borderRadius: 5,
        alignItems: 'center'
    }
});

const mapStateToProps = state => ({
    data: getCurrentCasesUSData(state),
    isFetching: getIsFetchingCurrentCasesUS(state)
});

const mapDispatchToProps = dispatch => ({
    getData: () => dispatch(fetchCurrentDataUS())
});

export default connect(mapStateToProps, mapDispatchToProps)(CaseSummaryCard);