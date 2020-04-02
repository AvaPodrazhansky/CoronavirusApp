import * as React from 'react';
import connect from "react-redux/lib/connect/connect";
import {Text, StyleSheet, View} from 'react-native';
import colors from '../../constants/Colors';
import {getCurrentCasesUSData, getIsFetchingCurrentCasesUS} from "../../selectors/dashboard/current-cases-us";
import {fetchCurrentDataUS} from '../../actions/dashboard/current-cases-us';
import {Card} from "react-native-elements";
import styles from "./styles";
import {CONFIRMED_LABEL, CUMULATIVE_CASES_HEADER, DEAD_LABEL, RECOVERED_LABEL} from "../../constants/constant-list";

const CaseSummaryCard = ({getData, data, isFetching}) => {
    React.useEffect(() => {
        // if(data === {}) {
            getData();
        // }
    }, []);

    const {
        CONFIRMED,
        DEAD,
        RECOVERED
    } = colors;

    return (
        <Card containerStyle={styles.container}
              title={CUMULATIVE_CASES_HEADER}
              titleStyle={styles.title}
        >
            <View style={styles2.blockContainer}>
                <View style={{...styles2.countBlock, borderColor: CONFIRMED}}>
                    <Text>{CONFIRMED_LABEL}{isFetching ? '--' : data.confirmed}</Text>
                </View>

                <View style={{...styles2.countBlock, borderColor: DEAD}}>
                    <Text>{DEAD_LABEL}{isFetching ? '--' : data.deaths}</Text>
                </View>

                <View style={{...styles2.countBlock, borderColor: RECOVERED}}>
                    <Text>{RECOVERED_LABEL}{isFetching ? '--' :data.recovered}</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(CaseSummaryCard);