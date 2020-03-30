import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Card, ListItem} from 'react-native-elements';
import {
    PROTECTION_METHODS_TITLE,
    protectionMethods,
    NEED_EMERGENCY_CARE, EMERGENCY_CARD_HEADER, FIND_NEAREST_NATIONAL_HEALTH_CENTERS
} from "../../constants/constant-list";
import PropTypes from "prop-types";
import {Entypo, FontAwesome, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import {getDiagnosis} from "../../selectors/symptom-survey/surveyResults";
import {connect} from "react-redux";
import styles from './styles';
import colors from '../../constants/Colors';
import { Divider } from 'react-native-elements';

const EmergencyCard = ({toNHCScreen, ...props}) => {

    const TitleComponent = () => (
        <View style={styles.titleContainer}>
            <FontAwesome name={'exclamation-circle'}
                         size={25} color={colors.WHITE}
                         style={{marginRight: 15}}/>
            <Text style={styles.emergencyCardTitle}>{EMERGENCY_CARD_HEADER}</Text>
        </View>);

    // TODO: Add button to go to NHC Screen
    return (
        <Card containerStyle={styles.emergency}
              title={<TitleComponent/>}
              titleStyle={styles.emergencyCardTitle}
              dividerStyle={styles.emergencyCardDivider}
        >
            {/*<FontAwesome name={'exclamation-circle'}/>*/}
            <Divider style={{ backgroundColor: colors.WHITE, margin: 1, marginTop: 15 }} />
            <Text style={styles.emergencyText}>{NEED_EMERGENCY_CARE}</Text>
            {/*<Button onPress={() => props.navigation.navigate('clinics')}*/}
            {/*        title={FIND_NEAREST_NATIONAL_HEALTH_CENTERS}/>*/}
        </Card>
    )
};

EmergencyCard.navigationOptions = {
    header: null,
};

EmergencyCard.propTypes = {
};

const mapStateToProps = state => ({
    diagnosis: getDiagnosis(state)
});

const mapDispatchToProps = (dispatch, props) => ({
    // toNHCScreen: () => props.navigation.navigate('NHC_Screen')
    toNHCScreen: () => {
        console.log(props);
        console.log(props.navigation);
        // console.log(props.navigation.navigate('Clinics'));
        // console.log(props.navigation.navigate('Clinics'));
        return props.navigation.navigate('Clinics')
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(EmergencyCard);
