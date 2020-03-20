import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Table, Row} from 'react-native-table-component';
import {getCurrentCasesByStateData} from '../../selectors/dashboard/current-cases-by-state';
import {fetchCurrentDataByState} from '../../actions/dashboard/current-cases-by-state';
import connect from 'react-redux/lib/connect/connect';
import colors from '../../constants/Colors';

const StateTableSummary = ({data}) => {

    const tableHead = ['State', 'Confirmed', 'Deaths'];

    return (
        <View style={styles.container}>
            <Table borderStyle={{borderWidth: 0}}>
                <Row data={tableHead} flexArr={[2, 1, 1]} style={styles.head} textStyle={styles.text}/>
                {
                    data.map((item, index) => (
                        <Row
                            key={index}
                            data={[item.name, item.positive, (item.death === null ? 0 : item.death)]}
                            flexArr={[2, 1, 1]}
                            style={[styles.row, index % 2 && {backgroundColor: '#F7F6E7'}]}
                            textStyle={styles.rowText}
                        />
                    ))
                }

            </Table>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: colors.WHITE},
    head: {height: 40, backgroundColor: colors.LIGHT_BLUE},
    wrapper: {flexDirection: 'row'},
    title: {flex: 1, backgroundColor: '#f6f8fa'},
    row: {height: 35},
    text: {textAlign: 'center', color: colors.WHITE, fontWeight: '100'},
    rowText: {textAlign: 'center'}
});


const mapStateToProps = state => ({
    data: getCurrentCasesByStateData(state)
});

const mapDispatchToProps = dispatch => ({
    getData: () => dispatch(fetchCurrentDataByState())
});

export default connect(mapStateToProps, mapDispatchToProps)(StateTableSummary);