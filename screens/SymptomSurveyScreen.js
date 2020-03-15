import * as React from 'react';
import {Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import {MonoText} from '../components/StyledText';
import {TextInput} from "react-native";
import {connect} from "react-redux";
import {getLocation} from "../selectors/symptom-survey/question1";
import {setLocation} from "../actions/symptom-survey/question1";
import {
    elevatedBodyTemperaturePressed,
    extremeFatiguePressed,
    symptomChillsPressed,
    soreThroatPressed,
    coughingPressed,
    shortnessOfBreathPressed,
    diarrheaPressed,
    conjunctivitisPressed,
    feelingFlusteredPressed,
    persistentHeadachePressed,
    decreasedSweatingPressed,
    notListedAbovePressed
} from "../actions/symptom-survey/question2";
import {visitedForeignCountriesPressed} from "../actions/symptom-survey/question3";
import {setPublicTransportation} from "../actions/symptom-survey/question4";
import {
    firstQuestionSymptomsPressed,
    foreignContactPressed,
    presenceConfirmedCOVIDPressed,
    suspectedCOVIDPressed,
    wildAnimalsPressed
} from "../actions/symptom-survey/question5";
import {
    cancerPressed,
    cerebrovascularDiseasePressed,
    chronicKidneyDiseasePressed,
    coronaryHeartDiseasePressed,
    diabetesPressed,
    highBloodPressurePressed,
    hormoneMedicationPressed,
    liverCirrhosisPressed,
    lungDiseasePressed
} from "../actions/symptom-survey/question8";
import {getNumber} from "../selectors/symptom-survey/question4";
import {getAge} from "../selectors/symptom-survey/question6";
import {setAge} from "../actions/symptom-survey/question6";
import {setSex} from "../actions/symptom-survey/question7";
import {submitSurvey} from "../actions/symptom-survey/submit-survey";

const SymptomSurveyScreen = ({
                                 location, setLocation, number, setPublicTransportation, age, setAge,
                                 elevatedBodyTemperaturePressed, extremeFatiguePressed, symptomChillsPressed,
                                 soreThroatPressed, coughingPressed, shortnessOfBreathPressed, diarrheaPressed,
                                 conjunctivitisPressed, feelingFlusteredPressed, persistentHeadachePressed,
                                 decreasedSweatingPressed, notListedAbovePressed, visitedForeignCountriesPressed,
                                 wildAnimalsPressed, foreignContactPressed, firstQuestionSymptomsPressed,
                                 suspectedCOVIDPressed, presenceConfirmedCOVIDPressed, setSex, highBloodPressurePressed,
                                 coronaryHeartDiseasePressed, diabetesPressed, chronicKidneyDiseasePressed,
                                 hormoneMedicationPressed, cancerPressed, liverCirrhosisPressed, lungDiseasePressed,
                                 cerebrovascularDiseasePressed, submitSurvey
                             }) => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <Text style={styles.locationText}>1. What is your current location?</Text>
                <TextInput style={styles.inputText} onChange={e => setLocation(e.nativeEvent.text.trim())}
                           value={location}></TextInput>
                <Text>2. Please inform us if you have the following symptoms. Please only press the symptoms that you
                    are experiencing. (It will appear green after being pressed.)</Text>
                <Button
                    title="Elevated Body Temperature (Oral temperature higher than 99.1 °F, Armpit Temperature
                    higher than 98.6 °F or Ear Temperature higher than 100.0 °F)"
                    onPress={elevatedBodyTemperaturePressed}
                />
                <Button
                    title="Extreme Fatigue, Exhaustion and Muscle Soreness"
                    onPress={() => extremeFatiguePressed()}
                />
                <Button
                    title="Symptoms of Chills or Tremors"
                    onPress={() => symptomChillsPressed()}
                />
                <Button
                    title="Sore Throat or Runny Nose"
                    onPress={() => soreThroatPressed()}
                />
                <Button
                    title="Coughing"
                    onPress={() => coughingPressed()}
                />
                <Button
                    title="Shortness of Breath (accompanied by decreased physical strength and energy)"
                    onPress={() => shortnessOfBreathPressed()}
                />
                <Button
                    title="Diarrhea, Nausea, Vomiting, or Abdominal Pain"
                    onPress={() => diarrheaPressed()}
                />
                <Button
                    title="Conjunctivitis or Pink Eye"
                    onPress={() => conjunctivitisPressed()}
                />
                <Button
                    title="Feeling flustered or experiencing chest pain or distress"
                    onPress={() => feelingFlusteredPressed()}
                />
                <Button
                    title="Persistent Headache"
                    onPress={() => persistentHeadachePressed()}
                />
                <Button
                    title="Decreased Sweating or Urination"
                    onPress={() => decreasedSweatingPressed()}
                />
                <Button
                    title="I am experiencing other types of uncomfortableness not listed above."
                    onPress={() => notListedAbovePressed()}
                />
                <Text>3. During the past two weeks, have you visited China, South Korea, Italy, Iran, or Japan?</Text>
                <Button
                    title="Yes"
                    onPress={() => visitedForeignCountriesPressed(true)}
                />
                <Button
                    title="No"
                    onPress={() => visitedForeignCountriesPressed(false)}
                />
                <Text>4. During the past two weeks, how many times have you taken public transportation (airplanes,
                    buses, subways, trains, taxis, cruises, etc.) with confirmed COVID-19 case(s) on board in which you
                    are not wearing a facial mask properly? Please write that number.
                    (If you leave this as blank, it will be considered as 0 times.)
                </Text>
                <TextInput style={styles.inputText} onChange={e => setPublicTransportation(e.nativeEvent.text.trim())}
                           value={number}></TextInput>
                <Text>5. During the past two weeks, have you been to the following places or made contact with the
                    people or wild animals listed below? If so, please press the following specific buttons. (It will
                    appear green after being pressed.)
                </Text>
                <Button
                    title="Wild animals (Bats, Marmots, Civets, Camels, or Rats)"
                    onPress={() => wildAnimalsPressed()}
                />
                <Button
                    title="Close contact with people from Hubei China, South Korea, Italy, Iran or Japan without
                    properly wearing a mask. (Close contact includes but is not limited to talking, eating, studying,
                    or taking public transportation together.)"
                    onPress={() => foreignContactPressed()}
                />
                <Button
                    title="Other people who are experiencing the symptoms listed on the first question"
                    onPress={() => firstQuestionSymptomsPressed()}
                />
                <Button
                    title="Close contact with suspected or confirmed COVID-19 case(s)"
                    onPress={() => suspectedCOVIDPressed()}
                />
                <Button
                    title="Presence of confirmed COVID-19 case(s) in your community"
                    onPress={() => presenceConfirmedCOVIDPressed()}
                />
                <Text>6. What is your age?</Text>
                <TextInput style={styles.inputText} onChange={e => setAge(e.nativeEvent.text.trim())}
                           value={age}></TextInput>
                <Text>7. What is your sex?</Text>
                <Button
                    title="Male"
                    onPress={() => setSex(false)}
                />
                <Button
                    title="Female"
                    onPress={() => setSex(true)}
                />
                <Text>8. Do you have existing conditions or diseases listed below? If so, please press the following
                    specific buttons. (It will appear green after being pressed.)</Text>
                <Button
                    title="High Blood Pressure"
                    onPress={() => highBloodPressurePressed()}
                />
                <Button
                    title="Coronary Heart Disease or Heart Failure"
                    onPress={() => coronaryHeartDiseasePressed()}
                />
                <Button
                    title="Diabetes"
                    onPress={() => diabetesPressed()}
                />
                <Button
                    title="Chronic Kidney Disease or Regular Kidney Disease"
                    onPress={() => chronicKidneyDiseasePressed()}
                />
                <Button
                    title="Currently on Hormone Medication or Immunosuppressive Drugs"
                    onPress={() => hormoneMedicationPressed()}
                />
                <Button
                    title="Cancer"
                    onPress={() => cancerPressed()}
                />
                <Button
                    title="Liver Cirrhosis"
                    onPress={() => liverCirrhosisPressed()}
                />
                <Button
                    title="Chronic Lung Disease (Pulmonary Fibrosis, Chronic Obstructive Pulmonary Disease
                    (C.O.P.D.), or Respiratory Failure)"
                    onPress={() => lungDiseasePressed()}
                />
                <Button
                    title="Cerebrovascular Disease"
                    onPress={() => cerebrovascularDiseasePressed()}
                />
                <Button
                    title="Submit"
                    onPress={() => submitSurvey()}
                />
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
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: {width: 0, height: -3},
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
    locationText: {
        fontSize: 17,
        color: "blue",
        paddingHorizontal: 20
    },
    inputText: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    }
});

const mapStateToProps = state => ({
    location: getLocation(state),
    number: getNumber(state),
    age: getAge(state)
});

const mapDispatchToProps = dispatch => ({
    setLocation: location => dispatch(setLocation(location)),
    setPublicTransportation: number => dispatch(setPublicTransportation(number)),
    setAge: age => dispatch(setAge(age)),
    elevatedBodyTemperaturePressed: () => elevatedBodyTemperaturePressed(),
    extremeFatiguePressed: () => extremeFatiguePressed(),
    symptomChillsPressed: () => symptomChillsPressed(),
    soreThroatPressed: () => soreThroatPressed(),
    coughingPressed: () => coughingPressed(),
    shortnessOfBreathPressed: () => shortnessOfBreathPressed(),
    diarrheaPressed: () => diarrheaPressed(),
    conjunctivitisPressed: () => conjunctivitisPressed(),
    feelingFlusteredPressed: () => feelingFlusteredPressed(),
    persistentHeadachePressed: () => persistentHeadachePressed(),
    decreasedSweatingPressed: () => decreasedSweatingPressed(),
    notListedAbovePressed: () => notListedAbovePressed(),
    visitedForeignCountriesPressed: value => visitedForeignCountriesPressed(value),
    wildAnimalsPressed: () => wildAnimalsPressed(),
    foreignContactPressed: () => foreignContactPressed(),
    firstQuestionSymptomsPressed: () => firstQuestionSymptomsPressed(),
    suspectedCOVIDPressed: () => suspectedCOVIDPressed(),
    presenceConfirmedCOVIDPressed: () => presenceConfirmedCOVIDPressed(),
    setSex: value => setSex(value),
    highBloodPressurePressed: () => highBloodPressurePressed(),
    coronaryHeartDiseasePressed: () => coronaryHeartDiseasePressed(),
    diabetesPressed: () => diabetesPressed(),
    chronicKidneyDiseasePressed: () => chronicKidneyDiseasePressed(),
    hormoneMedicationPressed: () => hormoneMedicationPressed(),
    cancerPressed: () => cancerPressed(),
    liverCirrhosisPressed: () => liverCirrhosisPressed(),
    lungDiseasePressed: () => lungDiseasePressed(),
    cerebrovascularDiseasePressed: () => cerebrovascularDiseasePressed(),
    submitSurvey: () => submitSurvey()
});

export default connect(mapStateToProps, mapDispatchToProps)(SymptomSurveyScreen);