import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Input from './index'
import {QUESTION_SIX} from "../../../constants/constant-list";
import {getAge} from "../../../selectors/symptom-survey/question6";
import {setAge} from "../../../actions/symptom-survey/question6";
import styles from './input-styles'

const QuestionSixInput = ({setAge, age}) => {
    return (
        <Input
            title={QUESTION_SIX}
            titleStyle={styles.questionInputText}
            actionFunction={e => setAge(e.nativeEvent.text.trim())}
            value={age}
            keyboardType={'numeric'}
        />
    )
};

QuestionSixInput.propTypes = {
    age: PropTypes.any,
    setAge: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    age: getAge(state)
});

const mapDispatchToProps = dispatch => ({
    setAge: age => dispatch(setAge(age))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionSixInput);
