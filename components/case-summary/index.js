import * as React from 'react';
import connect from "react-redux/lib/connect/connect";
import {Text, StyleSheet, View} from 'react-native';
import colors from '../../constants/Colors';

const CaseSummary = ({confirmedCount, recoveredCount, deathCount}) => {

    const {
        LIGHT_ORANGE,
        RED,
        GREEN
    } = colors;

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Cumulative Cases</Text>
            <View style={styles.blockContainer}>
                <View style={{...styles.countBlock, borderColor: LIGHT_ORANGE}}>
                    <Text>Confirmed: {confirmedCount}</Text>
                </View>

                <View style={{...styles.countBlock, borderColor: RED}}>
                    <Text>Dead: {deathCount}</Text>
                </View>

                <View style={{...styles.countBlock, borderColor: GREEN}}>
                    <Text>Recovered: {recoveredCount}</Text>
                </View>

            </View>
        </View>
    );

};

const styles = StyleSheet.create({
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
        borderRadius: 5
    }
});

const mapStateToProps = state => ({
    confirmedCount: 100,
    recoveredCount: 30,
    deathCount: 12
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CaseSummary);