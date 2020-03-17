import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {cerebrovascularDiseasePressed} from "../../../../actions/symptom-survey/question8";

const QuestionEightAnswerNineButton = ({cerebrovascularDiseasePressed}) => {
    return (
        <Button
            title="Cerebrovascular Disease"
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