import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Card, ListItem} from 'react-native-elements';
import {
    PROTECTION_METHODS_TITLE,
    protectionMethods
} from "../../constants/constant-list";
import PropTypes from "prop-types";
import {Entypo} from '@expo/vector-icons';

export default function ProtectionMethods() {

    return (
        <Card title={PROTECTION_METHODS_TITLE} titleStyle={styles.title}>
            {
                protectionMethods.map((item, i) => {
                    return (
                        <ListItem
                            key={'protection' + i}
                            title={item}
                            leftIcon={<Entypo name={'dot-single'}/>}
                            style={styles.listText}
                        />
                    );
                })
            }
        </Card>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    contentContainer: {
        paddingTop: 30,
    },
    title: {},
    listText: {}
});

ProtectionMethods.propTypes = {
    title: PropTypes.string,

};