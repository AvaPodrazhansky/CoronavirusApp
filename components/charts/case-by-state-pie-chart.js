import * as React from 'react';
import connect from "react-redux/lib/connect/connect";
import {Text, StyleSheet, View, Dimensions} from 'react-native';
import {PieChart, StackedBarChart} from "react-native-chart-kit";
import colors from '../../constants/Colors';
import {fetchCurrentDataByState} from "../../actions/dashboard/current-cases-by-state";
import {
    getCurrentCasesByStateData,
    getIsFetchingCurrentCasesByState
} from "../../selectors/dashboard/current-cases-by-state";

// const LIGHT_BACKGROUND = "#E6F3F9";
// const LIGHT_BLUE = "#038FDA";
// const DARK_BLUE = "#143D97";
// const LIGHT_ORANGE = "#F7B62D";
// const DARK_ORANGE = "#ED741D";
// const VERY_DARK_ORANGE = "#CB4E12";
// const DARK_BROWN = "#733B08";
// const WHITE = "#FFFFFF";
// const DARK_GRAY = "#7B7B7B";
// const LIGHT_GRAY = "#cbcbcb";

const CaseByStatePieChart = ({data, getData, isFetching}) => {

    // React.useEffect(() => {
    //     if(data.length === 0) getData();
    //     console.log(data)
    // }, []);

    // const {
    //     LIGHT_ORANGE,
    //     DARK_ORANGE,
    //     DARK_BROWN
    // } = colors;
    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
    };

    return (
        <View>
            <Text style={{textAlign: 'center'}}>Case By State Pie Chart</Text>
            <PieChart
                data={data}
                width={Dimensions.get("screen").width} // TODO: Get layout width instead of screen width
                height={220}
                chartConfig={chartConfig}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="15"
                absolute
            />
        </View>
    );

};

const mapStateToProps = state => ({
    // data: [
    //     {
    //         name: "Confirmed",
    //         population: 215000,
    //         color: colors.CONFIRMED,
    //         legendFontColor: "#7F7F7F",
    //         legendFontSize: 15
    //     },
    //     {
    //         name: "Recovered",
    //         population: 28000,
    //         color: colors.RECOVERED,
    //         legendFontColor: "#7F7F7F",
    //         legendFontSize: 15
    //     },
    //     {
    //         name: "Dead",
    //         population: 5276,
    //         color: colors.DEAD,
    //         legendFontColor: "#7F7F7F",
    //         legendFontSize: 15
    //     }
    // ]
    data: getCurrentCasesByStateData(state).slice(0,5),
    isFetching: getIsFetchingCurrentCasesByState(state)
});

const mapDispatchToProps = dispatch => ({
    getData: () => dispatch(fetchCurrentDataByState())
});

export default connect(mapStateToProps, mapDispatchToProps)(CaseByStatePieChart);