import * as React from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
// import TotalCasesLineChart from '../components/charts/total-cases-line-chart';
// import CaseByStateBarGraph from '../components/charts/case-by-state-bar-graph';
// import CaseSummary from '../components/case-summary';
// import OutcomeOfInfectedPieChart from '../components/charts/outcome-of-infected-pie-chart';
// import CaseByStatePieChart from '../components/charts/case-by-state-pie-chart';
import StateList from '../components/lists/State-List';
import StateTableSummary from '../components/tables/us-summary-table'

//TODO: Change view with survey page button. It hides content at the bottom of the scroll view
const HomeScreen = ({toSurvey}) => {
    // console.log(this.props)
    return (
        <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                {/*<CaseSummary/>*/}
                <StateTableSummary/>
                {/*<StateList/>*/}
                {/*<CaseByStatePieChart/>*/}
                {/*<OutcomeOfInfectedPieChart/>*/}
                {/*<CaseByStateBarGraph/>*/}
                {/*<CaseSummary/>*/}
                {/*<TotalCasesLineChart/>*/}
            </ScrollView>

            <View style={styles.tabBarInfoContainer}>
                <Text style={styles.tabBarInfoText}>Self Diagnosis Survey:</Text>
                <Button title={'Survey Page'} onPress={toSurvey}/>
            </View>
        </View>
    );
};

HomeScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 10,
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
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
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
});

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, props) => ({
    toSurvey: () => {
        console.log(props)
        props.navigation.navigate('Diagnosis')
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
