import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {elevatedBodyTemperaturePressed} from "../../../../actions/symptom-survey/question2";
import {QUESTION_TWO_BUTTON_ANSWER_ONE} from "../../../../constants/constant-list";


const QuestionTwoAnswerOneButton = ({elevatedBodyTemperaturePressed}) => {
    return (
        <Button
            title={QUESTION_TWO_BUTTON_ANSWER_ONE}
            onPress={() => elevatedBodyTemperaturePressed}
        />
    )
};

const styles = StyleSheet.create({});

QuestionTwoAnswerOneButton.propTypes = {
    elevatedBodyTemperaturePressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    elevatedBodyTemperaturePressed: () => dispatch(elevatedBodyTemperaturePressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTwoAnswerOneButton);
