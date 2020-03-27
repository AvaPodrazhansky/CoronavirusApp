import * as React from 'react';
import {Button, Platform, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from "react-redux";
import {resetSurvey} from "../../actions/symptom-survey/submit-survey";

const DiagnosisResultScreen = ({resetSurvey}) => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            </ScrollView>
            <View style={styles.tabBarInfoContainer}>
                <Text style={styles.tabBarInfoText}>Self Diagnosis Survey:</Text>
                <Button title={'Restart the Survey?'} onPress={resetSurvey}/>
            </View>
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
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
});

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    resetSurvey: () => dispatch(resetSurvey())
});

export default connect(mapStateToProps, mapDispatchToProps)(DiagnosisResultScreen);