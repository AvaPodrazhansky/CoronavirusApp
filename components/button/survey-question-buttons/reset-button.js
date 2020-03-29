import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {resetSurvey} from "../../../actions/symptom-survey/submit-survey";
import {RESTART_BUTTON_TEXT} from "../../../constants/constant-list";
import Button from './index';
import {EvilIcons} from '@expo/vector-icons';
import {StyleSheet, Text, View} from "react-native";
import colors from "../../../constants/Colors";

const ResetButton = ({resetSurvey}) => {

    return (
        <Button actionFunction={resetSurvey} type={'clear'}>
            <View style={{justifyContent: "center", alignItems: "center",}}>
                <EvilIcons name={'redo'} size={50} style={styles.icon}/>
                <Text style={styles.text}>{RESTART_BUTTON_TEXT}</Text>
            </View>
        </Button>
    )
};

ResetButton.propTypes = {
    resetSurvey: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    icon: {
        // fontSize: 15,
        color: colors.WHITE,
        fontWeight: 'bold'
    },
    text: {
        fontSize: 15,
        color: colors.WHITE,
        fontWeight: '200'
    }
});

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    resetSurvey: () => dispatch(resetSurvey())
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetButton);
