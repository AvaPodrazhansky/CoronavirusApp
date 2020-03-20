import * as React from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from "react-redux";
import SurveyLocationTextInput from "../components/text-input/survey-location";
import PublicTransportationTextInput from "../components/text-input/public-transportation";
import AgeTextInput from "../components/text-input/age";
import SubmitButton from "../components/button/survey-question-buttons/submit-button";
import {
    QUESTION_FOUR,
    QUESTION_ONE,
    QUESTION_SIX
} from "../constants/constant-list";
import QuestionTwoCheckbox from "../components/checkbox/survey-question-checkboxes/question2-checkboxes";
import QuestionThreeCheckbox from "../components/checkbox/survey-question-checkboxes/question3-checkboxes";
import QuestionFiveCheckbox from "../components/checkbox/survey-question-checkboxes/question5-checkboxes";
import QuestionSevenCheckbox from "../components/checkbox/survey-question-checkboxes/question7-checkboxes";
import QuestionEightCheckbox from "../components/checkbox/survey-question-checkboxes/question8-checkboxes";

// TODO Fix the Question 1 Answer 1 Button (not changing from false)

const SymptomSurveyScreen = ({}) => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <Text style={styles.locationText}>{QUESTION_ONE}</Text>
                <SurveyLocationTextInput/>
                <QuestionTwoCheckbox/>
                <QuestionThreeCheckbox/>
                <Text>{QUESTION_FOUR}</Text>
                <PublicTransportationTextInput/>
                <QuestionFiveCheckbox/>
                <Text>{QUESTION_SIX}</Text>
                <AgeTextInput/>
                <QuestionSevenCheckbox/>
                <QuestionEightCheckbox/>
                <SubmitButton/>
            </ScrollView>
        </View>
    );
};

SymptomSurveyScreen.navigationOptions = {
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
    locationText: {
        fontSize: 17,
        color: "blue",
        paddingHorizontal: 20
    },
});

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SymptomSurveyScreen);
