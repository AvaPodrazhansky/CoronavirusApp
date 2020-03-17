import React from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {elevatedBodyTemperaturePressed} from "../../../../actions/symptom-survey/question2";


const QuestionTwoAnswerOneButton = ({elevatedBodyTemperaturePressed}) => {
    return (
        <Button
            title="Elevated Body Temperature (Oral temperature higher than 99.1 °F, Armpit Temperature
                    higher than 98.6 °F or Ear Temperature higher than 100.0 °F)"
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
