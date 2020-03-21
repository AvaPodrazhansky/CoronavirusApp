import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Input from './index'
import {QUESTION_FOUR} from "../../../constants/constant-list";
import {getNumber} from "../../../selectors/symptom-survey/question4";
import {setPublicTransportation} from "../../../actions/symptom-survey/question4";
import styles from './input-styles'

const QuestionFourInput = ({setPublicTransportation, number}) => {
    return (
        <Input
            title={QUESTION_FOUR}
            titleStyle={styles.questionInputText}
            actionFunction={e => setPublicTransportation(e.nativeEvent.text.trim())}
            value={number}
        />
    )
};

QuestionFourInput.propTypes = {
    number: PropTypes.any,
    setPublicTransportation: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    number: getNumber(state)
});

const mapDispatchToProps = dispatch => ({
    setPublicTransportation: number => dispatch(setPublicTransportation(number))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionFourInput);
