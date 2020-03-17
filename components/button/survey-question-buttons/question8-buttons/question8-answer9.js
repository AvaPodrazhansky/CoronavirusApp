import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {cerebrovascularDiseasePressed} from "../../../../actions/symptom-survey/question8";
import {QUESTION_EIGHT_BUTTON_ANSWER_NINE} from "../../../../constants/constant-list";

const QuestionEightAnswerNineButton = ({cerebrovascularDiseasePressed}) => {
    return (
        <Button
            title={QUESTION_EIGHT_BUTTON_ANSWER_NINE}
            onPress={() => cerebrovascularDiseasePressed()}
        />
    )
};

const styles = StyleSheet.create({});

QuestionEightAnswerNineButton.propTypes = {
    cerebrovascularDiseasePressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    cerebrovascularDiseasePressed: () => dispatch(cerebrovascularDiseasePressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionEightAnswerNineButton);