import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {elevatedBodyTemperaturePressed} from "../../../../actions/symptom-survey/question2";
import {QUESTION_TWO_BUTTON_ANSWER_ONE} from "../../../../constants/constant-list";
import styles from '../survey-button-styles'

const QuestionTwoAnswerOneButton = ({elevatedBodyTemperaturePressed}) => {
    return (
        <TouchableOpacity onPress={elevatedBodyTemperaturePressed}>
            <Text style={styles.button}>{QUESTION_TWO_BUTTON_ANSWER_ONE}</Text>
        </TouchableOpacity>
    )
};

QuestionTwoAnswerOneButton.propTypes = {
    elevatedBodyTemperaturePressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    elevatedBodyTemperaturePressed: () => dispatch(elevatedBodyTemperaturePressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTwoAnswerOneButton);
