import * as React from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from "react-redux";
import TermsAndConditions from "../../components/cards/TermsAndConditions";

const DiagnosisTermsScreen = ({}) => {
    return(
        <ScrollView>
            <TermsAndConditions/>
        </ScrollView>
    )
};

DiagnosisTermsScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({});

DiagnosisTermsScreen.propTypes = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, props) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DiagnosisTermsScreen);
