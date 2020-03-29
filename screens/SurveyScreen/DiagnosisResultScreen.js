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
    PROTECTION_METHOD_EIGHT,
    PROTECTION_METHOD_FIVE,
    PROTECTION_METHOD_FOUR,
    PROTECTION_METHOD_ONE,
    PROTECTION_METHOD_SEVEN,
    PROTECTION_METHOD_SIX,
    PROTECTION_METHOD_THREE,
    PROTECTION_METHOD_TWO,
    SOCIAL_DISTANCING
} from "../../constants/constant-list";
import {getDiagnosis} from "../../selectors/symptom-survey/surveyResults";
import PropTypes from "prop-types";
import ProtectionMethods from "../../components/cards/ProtectionMethods";
import colors from '../../constants/Colors';
import ScrollableHeaderScrollView from '../../components/scrollview/scrollable-header';

const DiagnosisResultScreen = ({diagnosis}) => {

    const diagnosisBanner = diagnosis ? COVID_CONFIRMED_BANNER : NOT_INFECTED_BANNER;
    const diagnosisMessage = diagnosis ? COVID_CONFIRMED : NOT_INFECTED;

    // return (
    //     <View style={styles.container}>
    //         <View style={styles.diagnosis}>
    //             <Text>{diagnosisBanner}</Text>
    //             <Text>{diagnosisMessage}</Text>
    //             <ResetButton/>
    //         </View>
    //         <ScrollView style={styles.container}
    //                     contentContainerStyle={styles.contentContainer}
    //                     // stickyHeaderIndices={[0]}
    //                     onScroll={() => console.log('scroll')}
    //         >
    //             <ProtectionMethods/>
    //             <ProtectionMethods/>
    //             <ProtectionMethods/>
    //         </ScrollView>
    //
    //     </View>
    // );

    return (
        <ScrollableHeaderScrollView shrinkingTitleComponent={
            <View style={styles.shrinkingComponent}>
                <Text style={styles.diagnosisMessage}>{diagnosisMessage}</Text>
                <ResetButton/>
            </View>
        } mainTitleComponent={
            <View style={styles.minComponent}>
                <Text style={styles.bannerMessage}>{diagnosisBanner}</Text>
            </View>
        }
        headerBackgroundColor={colors.LIGHT_ORANGE}>
            <ProtectionMethods key={1}/>
            <ProtectionMethods key={2}/>
            <ProtectionMethods key={3}/>
        </ScrollableHeaderScrollView>
    )

    // return <ScrollableHeaderScrollView componentList={(
    //     <View>
    //         <ProtectionMethods/>
    //         <ProtectionMethods/>
    //         <ProtectionMethods/>
    //     </View>
    // )
    // }/>


};

DiagnosisResultScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#c92596'
    },
    shrinkingComponent: {
        flex: 1,
        // backgroundColor: colors.LIGHT_ORANGE,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        // padding: 20,
        // paddingBottom: 40
    },
    diagnosisMessage: {
        // backgroundColor: colors.LIGHT_ORANGE,
        margin: 15
    },
    bannerMessage: {
        backgroundColor: colors.LIGHT_ORANGE,
        // margin: 15
    },
    minComponent: {
        flex: 1,
        // backgroundColor: colors.RECOVERED
    }
});

DiagnosisResultScreen.propTypes = {
    diagnosis: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    diagnosis: getDiagnosis(state)
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DiagnosisResultScreen);
