import * as React from 'react';
import connect from "react-redux/lib/connect/connect";
import {Text, StyleSheet, View} from 'react-native';
import colors from '../../constants/Colors';
import {
    getCurrentCasesUSData,
    getFocusedCaseType,
    getIsFetchingCurrentCasesUS
} from "../../selectors/dashboard/current-cases-us";
import {fetchCurrentDataUS, setFocusedCaseType} from '../../actions/dashboard/current-cases-us';
import {Card} from "react-native-elements";
import styles from "./styles";
import {
    CONFIRMED,
    CONFIRMED_TYPE,
    CUMULATIVE_CASES_HEADER,
    DEAD,
    DEATHS_TYPE,
    RECOVERED,
    RECOVERED_TYPE
} from '../../constants/constant-list';
import Button from '../button';

const CaseSummaryCard = ({
                             getData, data, isFetching, setFocusedCaseConfirmed, setFocusedCaseDeaths,
                             setFocusedCaseRecovered, focusedType
                         }) => {
    React.useEffect(() => {
        // if(data === {}) {
        getData();
        // }
    }, []);

    const InfoBox = ({boxType}) => {
        let color, label, value, onPress;
        if (boxType === CONFIRMED_TYPE) {
            color = colors.CONFIRMED;
            label = CONFIRMED;
            value = data.confirmed;
            onPress = setFocusedCaseConfirmed;
        } else if (boxType === DEATHS_TYPE) {
            color = colors.DEAD;
            label = DEAD;
            value = data.deaths;
            onPress = setFocusedCaseDeaths;
        } else if (boxType === RECOVERED_TYPE) {
            color = colors.RECOVERED;
            label = RECOVERED;
            value = data.recovered;
            onPress = setFocusedCaseRecovered;
        }

        const backgroundColor = boxType === focusedType ? color : colors.TRANSPARENT;

        return (
            <Button
                onPress={onPress}
            >
                <View style={{...styles2.countBlock, borderColor: color, backgroundColor: backgroundColor}}>
                    <Text>{label}</Text>
                    <Text>{isFetching ? '--' : value}</Text>
                </View>
            </Button>
        )
    };

    return (
        <Card containerStyle={styles.container}
              title={CUMULATIVE_CASES_HEADER}
              titleStyle={styles.title}
            // containerStyle={styles2.blockContainer}
        >
            <View style={styles2.blockContainer}>
                <InfoBox boxType={CONFIRMED_TYPE}/>
                <InfoBox boxType={DEATHS_TYPE}/>
                <InfoBox boxType={RECOVERED_TYPE}/>
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
        alignItems: 'center',
    },
});

const mapStateToProps = state => ({
    data: getCurrentCasesUSData(state),
    isFetching: getIsFetchingCurrentCasesUS(state),
    focusedType: getFocusedCaseType(state)
});

const mapDispatchToProps = dispatch => ({
    getData: () => dispatch(fetchCurrentDataUS()),
    setFocusedCaseConfirmed: () => dispatch(setFocusedCaseType(CONFIRMED_TYPE)),
    setFocusedCaseDeaths: () => dispatch(setFocusedCaseType(DEATHS_TYPE)),
    setFocusedCaseRecovered: () => dispatch(setFocusedCaseType(RECOVERED_TYPE))
});

export default connect(mapStateToProps, mapDispatchToProps)(CaseSummaryCard);