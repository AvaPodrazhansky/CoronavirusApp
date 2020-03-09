import * as React from 'react';
import {Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import {MonoText} from '../components/StyledText';
import SurveyLocationTextInput from "../components/text-input/survey-location";

export default function SymptomSurveyScreen() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <Text style={styles.locationText}>Current Location:</Text>
                <SurveyLocationTextInput/>
                <Text>Please inform us if you have the following symptoms. Please only click the symptoms that you are
                    experiencing (It will appear green after click).</Text>
                <Button
                    title="Elevated body temperature"
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
            </ScrollView>
        </View>
    );
}

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
    }
});
