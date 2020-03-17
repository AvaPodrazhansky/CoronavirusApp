import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {foreignContactPressed} from "../../../../actions/symptom-survey/question5";


const QuestionFiveAnswerTwoButton = ({foreignContactPressed}) => {
    return (
        <Button
            title="Close contact with people from Hubei China, South Korea, Italy, Iran or Japan without
                    properly wearing a mask. (Close contact includes but is not limited to talking, eating, studying,
                    or taking public transportation together.)"
            onPress={() => foreignContactPressed()}
        />
    )
};

const styles = StyleSheet.create({});

QuestionFiveAnswerTwoButton.propTypes = {
    foreignContactPressed: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    foreignContactPressed: () => dispatch(foreignContactPressed())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionFiveAnswerTwoButton);