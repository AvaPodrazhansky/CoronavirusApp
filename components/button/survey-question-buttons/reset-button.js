import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {resetSurvey} from "../../../actions/symptom-survey/submit-survey";
import {RESTART_BUTTON_TEXT} from "../../../constants/constant-list";
import Button from './index';
import {EvilIcons} from '@expo/vector-icons';
import {Text, View} from "react-native";

const ResetButton = ({resetSurvey}) => {

    return (
        <Button actionFunction={resetSurvey} type={'clear'}>
            <View style={{justifyContent: "center", alignItems: "center",}}>
                <EvilIcons name={'redo'} size={50}/>
                <Text>{RESTART_BUTTON_TEXT}</Text>
            </View>
        </Button>
    )
};

ResetButton.propTypes = {
    resetSurvey: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    resetSurvey: () => dispatch(resetSurvey())
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetButton);
