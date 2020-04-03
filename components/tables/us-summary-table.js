import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Table, Row} from 'react-native-table-component';
import {
    getCurrentCasesByStateData,
    getIsFetchingCurrentCasesByState
} from '../../selectors/dashboard/current-cases-by-state';
import {fetchCurrentDataByState} from '../../actions/dashboard/current-cases-by-state';
import connect from 'react-redux/lib/connect/connect';
import colors from '../../constants/Colors';
import {CONFIRMED, DEAD, RECOVERED} from "../../constants/constant-list";

const StateTableSummary = ({data, getData, isFetching}) => {

    React.useEffect(() => {
        if(data.length === 0 && isFetching === false) getData();
        // console.log(data)
    }, []);

    if(isFetching === true){
        return (
            <Text>Loading</Text>
        )
    }

    const tableHead = ['State', CONFIRMED, DEAD,
        RECOVERED
    ];

    return (
        <View style={styles.container}>
            <Table borderStyle={{borderWidth: 0}}>
                <Row data={tableHead} flexArr={[2, 1, 1, 1]} style={styles.head} textStyle={styles.text}/>
                {
                    data.map((item, index) => (
                        <Row
                            key={index}
                            data={[item.state,
                                (item.confirmed === 'N/A' ? '-' : item.confirmed),
                                (item.deaths === 'N/A' ? '-' : item.deaths),
                                (item.recovered === 'N/A' ? '-' : item.recovered)
                            ]}
                            flexArr={[2, 1, 1, 1]}
                            style={[styles.row, index % 2 && {backgroundColor: colors.LIGHT_BACKGROUND}]}
                            textStyle={styles.rowText}
                        />
                    ))
                }

            </Table>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: colors.WHITE, marginBottom: 75},
    head: {height: 40, backgroundColor: colors.LIGHT_BLUE},
    wrapper: {flexDirection: 'row'},
    title: {flex: 1, backgroundColor: colors.LIGHT_BLUE},
    row: {height: 35},
    text: {textAlign: 'center', color: colors.WHITE, fontWeight: 'bold', fontSize: 15},
    rowText: {textAlign: 'center'}
});


const mapStateToProps = state => ({
    data: getCurrentCasesByStateData(state),
    isFetching: getIsFetchingCurrentCasesByState(state)
});

const mapDispatchToProps = dispatch => ({
    getData: () => dispatch(fetchCurrentDataByState())
});

export default connect(mapStateToProps, mapDispatchToProps)(StateTableSummary);