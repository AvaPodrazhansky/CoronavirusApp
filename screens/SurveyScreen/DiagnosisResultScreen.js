import * as React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from "react-redux";
import ResetButton from "../../components/button/survey-question-buttons/reset-button";
import {
    COVID_CONFIRMED,
    COVID_CONFIRMED_BANNER,
    NEED_EMERGENCY_CARE,
    NOT_INFECTED,
    NOT_INFECTED_BANNER,
    SOCIAL_DISTANCING
} from "../../constants/constant-list";
import {getDiagnosis} from "../../selectors/symptom-survey/surveyResults";
import PropTypes from "prop-types";
import ProtectionMethods from "../../components/cards/ProtectionMethods";
import colors from '../../constants/Colors';
import ScrollableHeaderScrollView from '../../components/scrollview/scrollable-header';
import EmergencyCard from "../../components/cards/EmergencyCard";

const DiagnosisResultScreen = ({diagnosis, toNHCScreen, ...props}) => {

    const diagnosisBanner = diagnosis ? COVID_CONFIRMED_BANNER : NOT_INFECTED_BANNER;
    const diagnosisMessage = diagnosis ? COVID_CONFIRMED : NOT_INFECTED;

    const ShrinkingTitleComponent = () => (
        <View style={styles.shrinkingComponent}>
            <Text style={styles.diagnosisMessage}>{diagnosisMessage}</Text>
            <ResetButton/>
        </View>
    );

    const MainTitleComponent = () => (
        <View style={styles.minComponent}>
            <Text style={styles.bannerMessage}>{diagnosisBanner}</Text>
        </View>
    );

    return (
        <ScrollableHeaderScrollView
            shrinkingTitleComponent={<ShrinkingTitleComponent/>}
            mainTitleComponent={<MainTitleComponent/>}
            headerBackgroundColor={diagnosis ? colors.RESULTS_LIGHT_RED : colors.RESULTS_LIGHT_GREEN}>
            {/*<Button title={'test'} onPress={toNHCScreen}/>*/}
            <EmergencyCard props={props}/>
            <ProtectionMethods/>
        </ScrollableHeaderScrollView>
    )

};

DiagnosisResultScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    shrinkingComponent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    diagnosisMessage: {
        // margin: 15,
        marginRight: 15,
        marginLeft: 15,
        textAlign: 'center',
        fontSize: 15,
        color: colors.WHITE,
        // fontWeight: 'bold'

    },
    bannerMessage: {
        fontSize: 20,
        color: colors.WHITE,
        fontWeight: 'bold'
    },
    minComponent: {
        flex: 1,
    }
});

DiagnosisResultScreen.propTypes = {
    diagnosis: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    diagnosis: getDiagnosis(state)
});

const mapDispatchToProps = (dispatch, props) => ({
    toNHCScreen: () => {
        console.log(props)
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(DiagnosisResultScreen);
