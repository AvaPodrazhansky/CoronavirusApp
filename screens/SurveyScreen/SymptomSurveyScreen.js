import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from "react-redux";
import SubmitButton from "../components/button/survey-question-buttons/submit-button";
import QuestionTwoCheckbox from "../components/checkbox/survey-question-checkboxes/question2-checkboxes";
import QuestionSevenCheckbox from "../components/checkbox/survey-question-checkboxes/question7-checkboxes";
import QuestionEightCheckbox from "../components/checkbox/survey-question-checkboxes/question8-checkboxes";
import QuestionOneInput from "../components/text-input/survey-question-inputs/question1-input";
import QuestionSixInput from "../components/text-input/survey-question-inputs/question6-input";

// TODO Fix the Question 1 Answer 1 Button (not changing from false)

const SymptomSurveyScreen = ({}) => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <QuestionOneInput/>
                <QuestionTwoCheckbox/>
                <QuestionSixInput/>
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
});

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SymptomSurveyScreen);
