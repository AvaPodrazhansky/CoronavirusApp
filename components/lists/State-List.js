import {ListItem} from 'react-native-elements';
import {View} from 'react-native';
import React from "react";
import connect from "react-redux/lib/connect/connect";
import {getCurrentCasesByStateData} from "../../selectors/dashboard/current-cases-by-state";
import {fetchCurrentDataByState} from "../../actions/dashboard/current-cases-by-state";
import colors from '../../constants/Colors';
import {statePopulations} from "../../constants/constant-list";

const MyRectangle = ({item}) => {
    // console.log(item)
    const confirmed = (item.confirmed === 'N/A' ? 0 : Number(item.confirmed));
    const deaths = (item.deaths === 'N/A' ? 0 : Number(item.deaths));
    const recovered = (item.recovered === 'N/A' ? 0 : Number(item.recovered));

    const total = confirmed + deaths + recovered + statePopulations[item.state] / 100;
    const state = item.state;
    // console.log({state}, {confirmed}, {deaths}, {recovered}, {total});

    const confirmedPercent = confirmed / total * 100;
    const deathsPercent = deaths / total * 100;
    const recoveredPercent = recovered / total * 100;

    // console.log({state}, {confirmed}, {deaths}, {recovered}, {total}, {confirmedPercent}, {deathsPercent}, {recoveredPercent});

    if (total === 0) {
        return null;
    }

    return (
        <View style={{flexDirection: 'row', height: 10, flex: 1}}>
            <View style={{width: (confirmed / total * 100) + '%', backgroundColor: colors.CONFIRMED}}/>
            <View style={{width: (deaths / total * 100) + '%', backgroundColor: colors.DEAD}}/>
            <View style={{width: (recovered / total * 100) + '%', backgroundColor: colors.RECOVERED}}/>
            <View style={{flex: 1, backgroundColor: '#cbcbcb'}}/>
        </View>
    )
};


const StateList = ({data, getData}) => {
    React.useEffect(() => {
        if (data.length === 0) getData();
    }, []);

    return (
        <View>
            {
                data.map((item, i) => (
                    <ListItem
                        key={i}
                        title={item.state}
                        // leftIcon={{ name: item.icon }}
                        rightIcon={<MyRectangle item={item}/>}
                        topDivider
                        bottomDivider
                        chevron
                    />
                ))
            }
        </View>
    );
};
const mapStateToProps = state => ({
    data: getCurrentCasesByStateData(state)
});

const mapDispatchToProps = dispatch => ({
    getData: () => dispatch(fetchCurrentDataByState())
});

export default connect(mapStateToProps, mapDispatchToProps)(StateList);