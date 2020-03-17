import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {diarrheaPressed} from "../../../../actions/symptom-survey/question2";

const QuestionTwoAnswerSevenButton = ({diarrheaPressed}) => {
    return (
        <Button
            title="Diarrhea, Nausea, Vomiting, or Abdominal Pain"
            onPress={() => diarrheaPressed()}
        />
    )
};

const styles = StyleSheet.create({});

QuestionTwoAnswerSevenButton.propTypes = {
    diarrheaPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    diarrheaPressed: () => dispatch(diarrheaPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTwoAnswerSevenButton);