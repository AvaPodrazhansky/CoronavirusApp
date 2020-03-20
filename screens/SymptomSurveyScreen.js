import * as React from 'react';
import {Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import {MonoText} from '../components/StyledText';
import {connect} from "react-redux";
import SurveyLocationTextInput from "../components/text-input/survey-location";
import PublicTransportationTextInput from "../components/text-input/public-transportation";
import AgeTextInput from "../components/text-input/age";
import QuestionTwoAnswerOneButton
    from "../components/button/survey-question-buttons/question2-buttons/question2-answer1";
import QuestionTwoAnswerTwoButton
    from "../components/button/survey-question-buttons/question2-buttons/question2-answer2";
import QuestionTwoAnswerThreeButton
    from "../components/button/survey-question-buttons/question2-buttons/question2-answer3";
import QuestionTwoAnswerFourButton
    from "../components/button/survey-question-buttons/question2-buttons/question2-answer4";
import QuestionTwoAnswerFiveButton
    from "../components/button/survey-question-buttons/question2-buttons/question2-answer5";
import QuestionTwoAnswerSixButton
    from "../components/button/survey-question-buttons/question2-buttons/question2-answer6";
import QuestionTwoAnswerSevenButton
    from "../components/button/survey-question-buttons/question2-buttons/question2-answer7";
import QuestionTwoAnswerEightButton
    from "../components/button/survey-question-buttons/question2-buttons/question2-answer8";
import QuestionTwoAnswerNineButton
    from "../components/button/survey-question-buttons/question2-buttons/question2-answer9";
import QuestionTwoAnswerTenButton
    from "../components/button/survey-question-buttons/question2-buttons/question2-answer10";
import QuestionTwoAnswerElevenButton
    from "../components/button/survey-question-buttons/question2-buttons/question2-answer11";
import QuestionTwoAnswerTwelveButton
    from "../components/button/survey-question-buttons/question2-buttons/question2-answer12";
import QuestionThreeYesButton from "../components/button/survey-question-buttons/question3-buttons/question3-yes";
import QuestionThreeNoButton from "../components/button/survey-question-buttons/question3-buttons/question3-no";
import QuestionSevenMaleButton from "../components/button/survey-question-buttons/question7-buttons/question7-male";
import QuestionSevenFemaleButton from "../components/button/survey-question-buttons/question7-buttons/question7-female";
import QuestionFiveAnswerOneButton
    from "../components/button/survey-question-buttons/question5-buttons/question5-answer1";
import QuestionFiveAnswerTwoButton
    from "../components/button/survey-question-buttons/question5-buttons/question5-answer2";
import QuestionFiveAnswerThreeButton
    from "../components/button/survey-question-buttons/question5-buttons/question5-answer3";
import QuestionFiveAnswerFourButton
    from "../components/button/survey-question-buttons/question5-buttons/question5-answer4";
import QuestionFiveAnswerFiveButton
    from "../components/button/survey-question-buttons/question5-buttons/question5-answer5";
import QuestionEightAnswerOneButton
    from "../components/button/survey-question-buttons/question8-buttons/question8-answer1";
import QuestionEightAnswerTwoButton
    from "../components/button/survey-question-buttons/question8-buttons/question8-answer2";
import QuestionEightAnswerThreeButton
    from "../components/button/survey-question-buttons/question8-buttons/question8-answer3";
import QuestionEightAnswerFourButton
    from "../components/button/survey-question-buttons/question8-buttons/question8-answer4";
import QuestionEightAnswerFiveButton
    from "../components/button/survey-question-buttons/question8-buttons/question8-answer5";
import QuestionEightAnswerSixButton
    from "../components/button/survey-question-buttons/question8-buttons/question8-answer6";
import QuestionEightAnswerSevenButton
    from "../components/button/survey-question-buttons/question8-buttons/question8-answer7";
import QuestionEightAnswerEightButton
    from "../components/button/survey-question-buttons/question8-buttons/question8-answer8";
import QuestionEightAnswerNineButton
    from "../components/button/survey-question-buttons/question8-buttons/question8-answer9";
import SubmitButton from "../components/button/survey-question-buttons/submit-button";
import {
    QUESTION_EIGHT,
    QUESTION_FIVE,
    QUESTION_FOUR,
    QUESTION_ONE,
    QUESTION_SEVEN,
    QUESTION_SIX,
    QUESTION_THREE,
    QUESTION_TWO
} from "../constants/constant-list";

// TODO Fix the Question 1 Answer 1 Button (not changing from false)

const SymptomSurveyScreen = ({}) => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <Text style={styles.locationText}>{QUESTION_ONE}</Text>
                <SurveyLocationTextInput/>
                <Text>{QUESTION_TWO}</Text>
                <QuestionTwoAnswerOneButton/>
                <QuestionTwoAnswerTwoButton/>
                <QuestionTwoAnswerThreeButton/>
                <QuestionTwoAnswerFourButton/>
                <QuestionTwoAnswerFiveButton/>
                <QuestionTwoAnswerSixButton/>
                <QuestionTwoAnswerSevenButton/>
                <QuestionTwoAnswerEightButton/>
                <QuestionTwoAnswerNineButton/>
                <QuestionTwoAnswerTenButton/>
                <QuestionTwoAnswerElevenButton/>
                <QuestionTwoAnswerTwelveButton/>
                <Text>{QUESTION_THREE}</Text>
                <QuestionThreeYesButton/>
                <QuestionThreeNoButton/>
                <Text>{QUESTION_FOUR}</Text>
                <PublicTransportationTextInput/>
                <Text>{QUESTION_FIVE}</Text>
                <QuestionFiveAnswerOneButton/>
                <QuestionFiveAnswerTwoButton/>
                <QuestionFiveAnswerThreeButton/>
                <QuestionFiveAnswerFourButton/>
                <QuestionFiveAnswerFiveButton/>
                <Text>{QUESTION_SIX}</Text>
                <AgeTextInput/>
                <Text>{QUESTION_SEVEN}</Text>
                <QuestionSevenMaleButton/>
                <QuestionSevenFemaleButton/>
                <Text>{QUESTION_EIGHT}</Text>
                <QuestionEightAnswerOneButton/>
                <QuestionEightAnswerTwoButton/>
                <QuestionEightAnswerThreeButton/>
                <QuestionEightAnswerFourButton/>
                <QuestionEightAnswerFiveButton/>
                <QuestionEightAnswerSixButton/>
                <QuestionEightAnswerSevenButton/>
                <QuestionEightAnswerEightButton/>
                <QuestionEightAnswerNineButton/>
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
