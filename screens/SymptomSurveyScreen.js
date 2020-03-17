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

const SymptomSurveyScreen = ({
                                 highBloodPressurePressed,
                                 coronaryHeartDiseasePressed, diabetesPressed, chronicKidneyDiseasePressed,
                                 hormoneMedicationPressed, cancerPressed, liverCirrhosisPressed, lungDiseasePressed,
                                 cerebrovascularDiseasePressed, submitSurvey
                             }) => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <Text style={styles.locationText}>1. What is your current location?</Text>
                <SurveyLocationTextInput/>
                <Text>2. Please inform us if you have the following symptoms. Please only press the symptoms that you
                    are experiencing. (It will appear green after being pressed.)</Text>
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
                <Text>3. During the past two weeks, have you visited China, South Korea, Italy, Iran, or Japan?</Text>
                <QuestionThreeYesButton/>
                <QuestionThreeNoButton/>
                <Text>4. During the past two weeks, how many times have you taken public transportation (airplanes,
                    buses, subways, trains, taxis, cruises, etc.) with confirmed COVID-19 case(s) on board in which you
                    are not wearing a facial mask properly? Please write that number.
                    (If you leave this as blank, it will be considered as 0 times.)
                </Text>
                <PublicTransportationTextInput/>
                <Text>5. During the past two weeks, have you been to the following places or made contact with the
                    people or wild animals listed below? If so, please press the following specific buttons. (It will
                    appear green after being pressed.)
                </Text>
                <QuestionFiveAnswerOneButton/>
                <QuestionFiveAnswerTwoButton/>
                <QuestionFiveAnswerThreeButton/>
                <QuestionFiveAnswerFourButton/>
                <QuestionFiveAnswerFiveButton/>
                <Text>6. What is your age?</Text>
                <AgeTextInput/>
                <Text>7. What is your sex?</Text>
                <QuestionSevenMaleButton/>
                <QuestionSevenFemaleButton/>
                <Text>8. Do you have existing conditions or diseases listed below? If so, please press the following
                    specific buttons. (It will appear green after being pressed.)</Text>
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
    inputText: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        flex: 1
    }
});

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SymptomSurveyScreen);