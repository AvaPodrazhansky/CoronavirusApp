import * as React from 'react';
import {Text, View} from 'react-native';
import {Card} from 'react-native-elements';
import {EMERGENCY_CARD_HEADER, NEED_EMERGENCY_CARE} from "../../constants/constant-list";
import PropTypes from "prop-types";
import {FontAwesome} from '@expo/vector-icons';
import {getDiagnosis} from "../../selectors/symptom-survey/surveyResults";
import {connect} from "react-redux";
import styles from './styles';
import colors from '../../constants/Colors';
import {Divider} from 'react-native-elements';

const EmergencyCard = () => {

    const TitleComponent = () => (
        <View style={styles.titleContainer}>
            <FontAwesome name={'exclamation-circle'}
                         size={25} color={colors.WHITE}
                         style={{marginRight: 15}}/>
            <Text style={styles.emergencyCardTitle}>{EMERGENCY_CARD_HEADER}</Text>
        </View>);

    return (
        <Card containerStyle={styles.emergency}
              title={<TitleComponent/>}
              titleStyle={styles.emergencyCardTitle}
              dividerStyle={styles.emergencyCardDivider}
        >
            <Divider style={{backgroundColor: colors.WHITE, margin: 1, marginTop: 15}}/>
            <Text style={styles.emergencyText}>{NEED_EMERGENCY_CARE}</Text>
        </Card>
    )
};

EmergencyCard.navigationOptions = {
    header: null,
};

EmergencyCard.propTypes = {
    diagnosis: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    diagnosis: getDiagnosis(state)
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(EmergencyCard);
