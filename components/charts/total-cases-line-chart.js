import * as React from 'react';
import connect from "react-redux/lib/connect/connect";
import {Text, StyleSheet, View, Dimensions} from 'react-native';
import {LineChart} from "react-native-chart-kit";
import {ScrollView} from 'react-native-gesture-handler';
import colors from '../../constants/Colors';

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

const {
    LIGHT_ORANGE,
    DARK_ORANGE,
    DARK_BROWN,
    WHITE,
    DARK_GRAY,
    LIGHT_GRAY,
    CONFIRMED,
    RECOVERED,
    DEAD
} = colors;

const TotalCasesLineChart = ({}) => {

    function generateLine(COLOR) {
        return {
            data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100
            ],
            color: (opacity = 1) => COLOR, // optional
            strokeWidth: 2, // optional
        }
    }

    return (
        <View>
            <Text style={{textAlign: 'center'}}>Total Cases Over Time</Text>
            <LineChart
                data={{
                    labels: ["December", "January", "February", "March"],
                    datasets: [generateLine(CONFIRMED), generateLine(RECOVERED), generateLine(DEAD)],
                    legend: ["Confirmed", "Recovered", "Deaths"] // optional
                }}
                width={Dimensions.get("window").width} // TODO: Get layout width instead of screen width
                height={220}
                yAxisLabel=""
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: WHITE,
                    backgroundGradientFrom: WHITE,
                    backgroundGradientTo: WHITE,
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => LIGHT_ORANGE, //`rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => DARK_GRAY,
                    style: {
                        borderRadius: 16
                    },
                    // propsForDots: {
                    //     r: "3",
                    //     strokeWidth: "10",
                    //     stroke: DARK_BLUE
                    // }
                    propsForBackgroundLines: {
                        stroke: LIGHT_GRAY
                    }
                }}
            />
        </View>
    );

};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TotalCasesLineChart);