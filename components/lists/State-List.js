import {StyleSheet, Text, View} from 'react-native';
import React from "react";
import connect from "react-redux/lib/connect/connect";
import {
    getCurrentCasesByStateData,
    getMaxConfirmedValue,
    getMaxDeathValue, getMaxRecoveredValue
} from "../../selectors/dashboard/current-cases-by-state";
import {fetchCurrentDataByState} from "../../actions/dashboard/current-cases-by-state";
import colors from '../../constants/Colors';
import {
    CONFIRMED_TYPE,
    DEATHS_TYPE,
    statePopulations,
    toolbarShiftValue
} from '../../constants/constant-list';
import {getFocusedCaseType} from '../../selectors/dashboard/current-cases-us';
// import {Entypo} from '@expo/vector-icons';

const PlagueBar = ({item, maxValue, unusedSpaceColor}) => {
    return (
        <View style={styles.progressBar}>
            <View style={{width: (item.confirmed / maxValue * 100) + '%', backgroundColor: colors.CONFIRMED}}/>
            <View style={{width: (item.deaths / maxValue * 100) + '%', backgroundColor: colors.DEAD}}/>
            <View style={{width: (item.recovered / maxValue * 100) + '%', backgroundColor: colors.RECOVERED}}/>
            <View style={{flex: 1, backgroundColor: unusedSpaceColor}}/>
        </View>
    )
};


const StateList = ({
                       data, getData, focusedCaseType, maxConfirmedValue, maxDeathValue, maxRecoveredValue,
                       showProgressByPercentageOfTotalPopulation
                   }) => {
    // React.useEffect(() => {
    //     if (data.length === 0)
    //         getData();
    // }, []);

    const compareType = focusedCaseType === CONFIRMED_TYPE ? 'confirmed' :
        focusedCaseType === DEATHS_TYPE ? 'deaths' : 'recovered';

    // TODO: Add alphabetical type


    function _calculatePercentage(item) {
        return item[compareType] / statePopulations[item.state] / toolbarShiftValue;
    }

    const sortedData = showProgressByPercentageOfTotalPopulation ? data.sort((a, b) => _calculatePercentage(a) > _calculatePercentage(b) ? -1 : 1) :
        data.sort((a, b) => a[compareType] > b[compareType] ? -1 : 1);

    const unusedSpaceColor = showProgressByPercentageOfTotalPopulation ? colors.LIGHT_GRAY : colors.TRANSPARENT;

    return (
        <View>
            {
                sortedData.map((item, index) => (
                        <View key={index} style={styles.listItem}>
                            {/*<Text style={styles.stateName}>{stateAbbreviations[item.state] || item.state}</Text>*/}
                            <Text style={styles.stateName}>{item.state}</Text>
                            <PlagueBar item={item}
                                       maxValue={showProgressByPercentageOfTotalPopulation ?
                                           (statePopulations[item.state] / toolbarShiftValue) :
                                           (maxConfirmedValue + maxDeathValue + maxRecoveredValue)}
                                       unusedSpaceColor={unusedSpaceColor}
                            />
                            {/*<Entypo name={'chevron-right'} style={styles.icon}/>*/}
                            {/*    Uncomment Entypo when adding county data*/}
                        </View>
                    )
                )
            }
        </View>
    )
};

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        marginRight: 5,
        marginLeft: 5,
        borderBottomWidth: 1,
        borderBottomColor: colors.LIGHT_GRAY,
        paddingTop: 10,
        paddingBottom: 10
    },
    stateName: {
        marginRight: 0,
        width: '35%'
    },
    progressBar: {
        flexDirection: 'row',
        height: 15,
        flex: 1,
        alignSelf: 'center',
    },
    icon: {
        marginLeft: 5
    }
});

const mapStateToProps = state => ({
    data: getCurrentCasesByStateData(state),
    focusedCaseType: getFocusedCaseType(state),
    maxConfirmedValue: getMaxConfirmedValue(state),
    maxDeathValue: getMaxDeathValue(state),
    maxRecoveredValue: getMaxRecoveredValue(state),
    showProgressByPercentageOfTotalPopulation: false // This is in case we decide to change the progress bar type
});

const mapDispatchToProps = dispatch => ({
    getData: () => dispatch(fetchCurrentDataByState())
});

export default connect(mapStateToProps, mapDispatchToProps)(StateList);