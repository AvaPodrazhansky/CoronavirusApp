import {ListItem} from 'react-native-elements';
import {View} from 'react-native';
import React from "react";
import connect from "react-redux/lib/connect/connect";
import {getCurrentCasesByStateData} from "../../selectors/dashboard/current-cases-by-state";
import {fetchCurrentDataByState} from "../../actions/dashboard/current-cases-by-state";
import colors from '../../constants/Colors';
import {CONFIRMED_TYPE, DEATHS_TYPE, statePopulations, toolbarShiftValue} from "../../constants/constant-list";
import {getFocusedCaseType} from "../../selectors/dashboard/current-cases-us";

const MyRectangle = ({item}) => {
    // console.log(item)
    const confirmed = (item.confirmed === 'N/A' ? 0 : Number(item.confirmed));
    const deaths = (item.deaths === 'N/A' ? 0 : Number(item.deaths));
    const recovered = (item.recovered === 'N/A' ? 0 : Number(item.recovered));

    const total = statePopulations[item.state] / toolbarShiftValue;
    // console.log(item.state, statePopulations[item.state])
    const state = item.state;
    // console.log({state}, {confirmed}, {deaths}, {recovered}, {total});

    const confirmedPercent = confirmed / total * 100;
    const deathsPercent = deaths / total * 100;
    const recoveredPercent = recovered / total * 100;

    console.log({state}, {confirmedPercent}, {deathsPercent}, {recoveredPercent});


    return (
        <View style={{flexDirection: 'row', height: 10, flex: 1}}>
            <View style={{width: (confirmed / total * 100) + '%', backgroundColor: colors.CONFIRMED}}/>
            <View style={{width: (deaths / total * 100) + '%', backgroundColor: colors.DEAD}}/>
            <View style={{width: (recovered / total * 100) + '%', backgroundColor: colors.RECOVERED}}/>
            <View style={{flex: 1, backgroundColor: '#cbcbcb'}}/>
        </View>
    )
};


const StateList = ({data, getData, focusedCaseType}) => {
    React.useEffect(() => {
        // if (data.length === 0)
        getData();
    }, []);

    const compareType = focusedCaseType === CONFIRMED_TYPE ? 'confirmed' :
        focusedCaseType === DEATHS_TYPE ? 'deaths' : 'recovered';

    function _calculatePercentage(item) {
        return item[compareType] / statePopulations[item.state] / toolbarShiftValue;
    }

    const sortedDataByPercentage = data.sort((a, b) => _calculatePercentage(a) > _calculatePercentage(b) ? -1 : 1);

    return (
        <View>
            {
                sortedDataByPercentage.map((item, i) => (
                    <ListItem
                        key={i}
                        title={item.state}
                        // leftIcon={{ name: item.icon }}
                        rightIcon={<MyRectangle item={item}/>}
                        topDivider
                        bottomDivider
                        // chevron //uncomment this when you want to add county data
                    />
                ))
            }
        </View>
    );
};
const mapStateToProps = state => ({
    data: getCurrentCasesByStateData(state),
    focusedCaseType: getFocusedCaseType(state)
});

const mapDispatchToProps = dispatch => ({
    getData: () => dispatch(fetchCurrentDataByState())
});

export default connect(mapStateToProps, mapDispatchToProps)(StateList);