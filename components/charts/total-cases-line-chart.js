import * as React from 'react';
import connect from "react-redux/lib/connect/connect";
import {Text, StyleSheet, View, Dimensions} from 'react-native';
import {LineChart} from "react-native-chart-kit";
import {ScrollView} from 'react-native-gesture-handler';

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

const TotalCasesLineChart = ({}) => {

    function generateLine(COLOR){
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
        <ScrollView>
            <View>
                <Text>Total Cases Over Time</Text>
                <LineChart
                    data={{
                        labels: ["December", "January", "February", "March"],
                        datasets: [generateLine(LIGHT_ORANGE), generateLine(DARK_ORANGE), generateLine(DARK_BROWN)],
                    }}
                    width={Dimensions.get("window").width} // from react-native
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
                    // bezier // Uncomment to curve lines
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />
            </View>
            <View>
                <Text>Bezier Line Chart</Text>
                <LineChart
                    data={{
                        labels: ["January", "February", "March", "April", "May", "June"],
                        datasets: [
                            {
                                data: [
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100
                                ]
                            }
                        ]
                    }}
                    width={Dimensions.get("window").width} // from react-native
                    height={220}
                    yAxisLabel="$"
                    yAxisSuffix="k"
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                        backgroundColor: "#e26a00",
                        backgroundGradientFrom: "#fb8c00",
                        backgroundGradientTo: "#ffa726",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#ffa726"
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />
            </View>
        </ScrollView>
    );

    // const data = {
    //     labels: ["January", "February", "March", "April", "May", "June"],
    //     datasets: [
    //         {
    //             data: [20, 45, 28, 80, 99, 43],
    //             color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
    //             strokeWidth: 2 // optional
    //         }
    //     ],
    //     legend: ["Rainy Days", "Sunny Days", "Snowy Days"] // optional
    // };
    //
    // const chartConfig = {
    //     backgroundGradientFrom: "#1E2923",
    //     backgroundGradientFromOpacity: 0,
    //     backgroundGradientTo: "#08130D",
    //     backgroundGradientToOpacity: 0.5,
    //     color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    //     strokeWidth: 2, // optional, default 3
    //     barPercentage: 0.5
    // };
    //
    // return (
    //     <LineChart
    //         data={data}
    //         width={Dimensions.get('window').width}
    //         height={220}
    //         chartConfig={chartConfig}
    //     />
    //
    // );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TotalCasesLineChart);

// import React from 'react';
// import { LineChart, Grid } from 'react-native-svg-charts';
// import * as shape from 'd3-shape';
// import { Circle, G, Line, Rect, Text } from 'react-native-svg';
//
//
// class TotalCasesLineChart extends React.PureComponent {
//
//     render() {
//
//         const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
//
//         /**
//          * Both below functions should preferably be their own React Components
//          */
//
//         const HorizontalLine = (({ y }) => (
//             <Line
//                 key={ 'zero-axis' }
//                 x1={ '0%' }
//                 x2={ '100%' }
//                 y1={ y(50) }
//                 y2={ y(50) }
//                 stroke={ 'grey' }
//                 strokeDasharray={ [ 4, 8 ] }
//                 strokeWidth={ 2 }
//             />
//         ))
//
//         const Tooltip = ({ x, y }) => (
//             <G
//                 x={ x(5) - (75 / 2) }
//                 key={ 'tooltip' }
//                 onPress={ () => console.log('tooltip clicked') }
//             >
//                 <G y={ 50 }>
//                     <Rect
//                         height={ 40 }
//                         width={ 75 }
//                         stroke={ 'grey' }
//                         fill={ 'white' }
//                         ry={ 10 }
//                         rx={ 10 }
//                     />
//                     <Text
//                         x={ 75 / 2 }
//                         dy={ 20 }
//                         alignmentBaseline={ 'middle' }
//                         textAnchor={ 'middle' }
//                         stroke={ 'rgb(134, 65, 244)' }
//                     >
//                         { `${data[5]}ºC` }
//                     </Text>
//                 </G>
//                 <G x={ 75 / 2 }>
//                     <Line
//                         y1={ 50 + 40 }
//                         y2={ y(data[ 5 ]) }
//                         stroke={ 'grey' }
//                         strokeWidth={ 2 }
//                     />
//                     <Circle
//                         cy={ y(data[ 5 ]) }
//                         r={ 6 }
//                         stroke={ 'rgb(134, 65, 244)' }
//                         strokeWidth={ 2 }
//                         fill={ 'white' }
//                     />
//                 </G>
//             </G>
//         )
//
//         return (
//             <LineChart
//                 style={{ height: 200 }}
//                 data={ data }
//                 svg={{
//                     stroke: 'rgb(134, 65, 244)',
//                     strokeWidth: 2,
//                 }}
//                 contentInset={{ top: 20, bottom: 20 }}
//                 curve={ shape.curveLinear }
//             >
//                 <Grid/>
//                 <HorizontalLine/>
//                 <Tooltip/>
//             </LineChart>
//         )
//     }
//
// }
//
// export default TotalCasesLineChart;
