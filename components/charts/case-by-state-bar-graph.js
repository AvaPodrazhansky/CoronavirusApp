import * as React from 'react';
import connect from "react-redux/lib/connect/connect";
import {Text, StyleSheet, View, Dimensions} from 'react-native';
import {StackedBarChart} from "react-native-chart-kit";
import {ScrollView} from 'react-native-gesture-handler';
// import colors from '../../constants/Colors';

const LIGHT_BACKGROUND = "#E6F3F9";
const LIGHT_BLUE = "#038FDA";
const DARK_BLUE = "#143D97";
const LIGHT_ORANGE = "#F7B62D";
const DARK_ORANGE = "#ED741D";
const VERY_DARK_ORANGE = "#CB4E12";
const DARK_BROWN = "#733B08";
const WHITE = "#FFFFFF";
const DARK_GRAY = "#7B7B7B";
const LIGHT_GRAY = "#cbcbcb";

const CaseByStateBarGraph = ({}) => {

    // const {
    //     LIGHT_ORANGE,
    //     DARK_ORANGE,
    //     DARK_BROWN
    // } = colors;

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
    const data = {
        labels: ["WA", "NY", "CA", "MA", "CO"],
        legend: ["Recovered", "Confirmed", "Dead"],
        data: [[80, 20, 60], [70, 30, 25], [60, 15, 25], [70, 10, 35], [60, 5, 30]],
        barColors: ["#dfe4ea", "#ced6e0", "#a4b0be"]
        // barColors: [LIGHT_ORANGE, DARK_ORANGE, DARK_BROWN]
    };
    return (
        <View>
            <Text style={{justifyContent: 'center', alignItems: 'center'}}>Breakdown by Top 5 States</Text>
            <StackedBarChart
                // style={graphStyle}
                data={data}
                width={Dimensions.get("window").width}
                height={220}
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

export default connect(mapStateToProps, mapDispatchToProps)(CaseByStateBarGraph);