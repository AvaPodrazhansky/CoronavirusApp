import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
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

const DiagnosisResultScreen = ({diagnosis}) => {

    const diagnosisBanner = diagnosis ? COVID_CONFIRMED_BANNER : NOT_INFECTED_BANNER;
    const diagnosisMessage = diagnosis ? COVID_CONFIRMED : NOT_INFECTED;

    return (
        <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <Text>{diagnosisBanner}</Text>
                <Text>{diagnosisMessage}</Text>
                <Text>{SOCIAL_DISTANCING}</Text>
                <Text>{NEED_EMERGENCY_CARE}</Text>
                <Text>{PROTECTION_METHOD_ONE}</Text>
                <Text>{PROTECTION_METHOD_TWO}</Text>
                <Text>{PROTECTION_METHOD_THREE}</Text>
                <Text>{PROTECTION_METHOD_FOUR}</Text>
                <Text>{PROTECTION_METHOD_FIVE}</Text>
                <Text>{PROTECTION_METHOD_SIX}</Text>
                <Text>{PROTECTION_METHOD_SEVEN}</Text>
                <Text>{PROTECTION_METHOD_EIGHT}</Text>
                <ResetButton/>
            </ScrollView>
        </View>
    );
};

DiagnosisResultScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    contentContainer: {
        paddingTop: 30,
    },
});

DiagnosisResultScreen.propTypes = {
    diagnosis: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    diagnosis: getDiagnosis(state)
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DiagnosisResultScreen);
