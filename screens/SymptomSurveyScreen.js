import * as React from 'react';
import {Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import {MonoText} from '../components/StyledText';
import {TextInput} from "react-native";
import {connect} from "react-redux";
import {setLocation} from "../actions/symptom-survey/symptoms";
import {getLocation} from "../selectors/symptom-survey/symptoms";

const SymptomSurveyScreen = ({location, setLocation}) => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <Text style={styles.locationText}>Current Location:</Text>
                <TextInput style={styles.inputText} onChange={e => setLocation(e.nativeEvent.text.trim())}
                           value={location}></TextInput>
                <Text>1. Please inform us if you have the following symptoms. Please only press the symptoms that you
                    are experiencing. (It will appear green after being pressed.)</Text>
                <Button
                    title="Elevated body temperature. Oral temperature higher than 99.1 °F, or armpit temperature
                    higher than 98.6 °F or ear temperature higher than 100.0 °F are considered elevated body
                    temperature. (Elevated body temperature can also due to sports, eating or sweating, so it better to
                    measure body temperature under ambient environment and avoiding sweating activity before
                    measurement. Be sure to wipe the sweat underarm before measuring the armpit temperature)."
                />
                <Button
                    title="Extreme fatigue, exhaustion and  muscle soreness"
                />
                <Button
                    title="Symptoms of chillness or trembling"
                />
                <Button
                    title="Sore throat, runny nose"
                />
                <Button
                    title="Cough"
                />
                <Button
                    title="Shortness of breath, accompanied by decreasing physical strength and energy"
                />
                <Button
                    title="Diarrhea, nauseous, vomit, abdominal pain"
                />
                <Button
                    title="Conjunctivitis or pink eye"
                />
                <Button
                    title="Feeling flustered or experiencing chest pain or distress"
                />
                <Button
                    title="Persistent headache"
                />
                <Button
                    title="Decreased sweating or urination"
                />
                <Button
                    title="I am experiencing other uncomfortableness but not listed above."
                />
                <Text>2. During the past two weeks, have you visited China, South Korea, Italy, Iran, or Japan?</Text>
                <Button
                    title="Yes"
                />
                <Button
                    title="No"
                />
                <Text>3. During the past two weeks, how many times have you taken public transportation (airplanes,
                    buses, subways, trains, taxis, cruises, etc.) with confirmed COVID-19 case(s) on board in which you
                    are not wearing a facial mask properly? Please write that number.
                    (If you leave this as blank, it will be considered as 0 times.)
                </Text>
                <TextInput style={styles.inputText}></TextInput>
                <Text>4. During the past two weeks, have you been to the following places or made contact with the
                    people or wild animals listed below? If so, please press the following specific buttons. (It will
                    appear green after being pressed.)
                </Text>
                <Button
                    title="Wild animal like bat, marmot, civets, camel, rats"
                />
                <Button
                    title="People from Hubei China, South Korean, Italy, Iran or Japan. If you make close contact with
                    them without properly wearing a mask, please click this. (close contact includes but not limited to
                    talking, eating or studying together, or taking public transportation together)"
                />
                <Button
                    title="Other people who are experiencing the symptoms listed on the first question"
                />
                <Button
                    title="Make close contact with suspected or confirmed COVID-19 case(s)"
                />
                <Button
                    title="Confirmed COVID-19 case(s) in your community"
                />
                <Text>5. What is your age?</Text>
                <TextInput style={styles.inputText}></TextInput>
                <Text>6. What is your sex?</Text>
                <Button
                    title="Male"
                />
                <Button
                    title="Female"
                />
                <Text>7. Do you have existing conditions or diseases listed below? If so, please press the following
                    specific buttons. (It will appear green after being pressed.)</Text>
                <Button
                    title="High Blood Pressure"
                />
                <Button
                    title="Coronary Heart Disease/heart failure"
                />
                <Button
                    title="Diabetes"
                />
                <Button
                    title="Chronic kidney disease/ kidney disease"
                />
                <Button
                    title="Currently on medication of hormone or immunosuppressor"
                />
                <Button
                    title="Cancer"
                />
                <Button
                    title="Liver cirrhosis"
                />
                <Button
                    title="Chronic lung disease such as pulmonary fibrosis, chronic obstructive pulmonary disease
                    ( COPD ) or respiratory failure"
                />
                <Button
                    title="Cerebrovascular disease"
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
    location: getLocation(state)
});

const mapDispatchToProps = dispatch => ({
    setLocation: location => dispatch(setLocation(location))
});

export default connect(mapStateToProps, mapDispatchToProps)(SymptomSurveyScreen);