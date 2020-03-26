import {ListItem} from 'react-native-elements';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import connect from 'react-redux/lib/connect/connect';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import colors from '../../constants/Colors';
import {getNHCListData} from '../../selectors/national-health-center/nhc-list-retrieval';

const IconView = ({name, text}) => {
    return (
        <View style={styles.iconView}>
            <MaterialCommunityIcons name={name} color={colors.LIGHT_BLUE} size={25}/>
            <Text style={{color: colors.LIGHT_BLUE}}>{text}</Text>
        </View>
    )
};

const NHCList = ({data}) => {
    return (
        <View>
            {
                data.map((item, i) => (
                    <ListItem
                        key={i}
                        title={item.name}
                        subtitle={item.formatted_address}
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
    data: getNHCListData(state),
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(NHCList);