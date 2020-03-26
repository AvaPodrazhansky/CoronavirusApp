import {ListItem} from 'react-native-elements';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import connect from 'react-redux/lib/connect/connect';
import {getCurrentCasesByStateData} from '../../selectors/dashboard/current-cases-by-state';
import {fetchCurrentDataByState} from '../../actions/dashboard/current-cases-by-state';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import colors from '../../constants/Colors';

const IconView = ({name, text}) => {
    return (
        <View style={styles.iconView}>
            <MaterialCommunityIcons name={name} color={colors.LIGHT_BLUE} size={25}/>
            <Text style={{color: colors.LIGHT_BLUE}}>{text}</Text>
        </View>
    )
};

const NHCList = ({data, getData}) => {
    React.useEffect(() => {
        if (data.length === 0) getData();
    }, [])
    return (
        <View>
            {
                data.map((item, i) => (
                    <ListItem
                        key={i}
                        title={'National Health Center: ' + i}
                        subtitle={'Address\nPhone'}
                        rightIcon={
                            <View style={styles.iconList}>
                                <IconView name={'phone'} text={'Call'}/>
                                <IconView name={'web'} text={'Website'}/>
                            </View>}
                        // leftIcon={{ name: item.icon }}
                        topDivider
                        bottomDivider
                        // chevron
                    />
                ))
            }
            {}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconList: {
        flexDirection: 'row',
    },
    iconView: {
        justifyContent: "center",
        alignItems: "center",
        margin: 5
    },
    iconTextStyle: {
        color: colors.LIGHT_BLUE
    }
});

const mapStateToProps = state => ({
    data: getCurrentCasesByStateData(state)
});

const mapDispatchToProps = dispatch => ({
    getData: () => dispatch(fetchCurrentDataByState())
});

export default connect(mapStateToProps, mapDispatchToProps)(NHCList);