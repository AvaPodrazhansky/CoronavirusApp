import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {setLocation} from "../../../actions/symptom-survey/question1";
import {getLocation} from "../../../selectors/symptom-survey/question1";
import Input from './index'
import {QUESTION_ONE} from "../../../constants/constant-list";
import styles from './input-styles'

const QuestionOneInput = ({setLocation, location}) => {
    return (
        <Input
            title={QUESTION_ONE}
            actionFunction={e => setLocation(e.nativeEvent.text.trim())}
            value={location}
        />
    )
};

QuestionOneInput.propTypes = {
    location: PropTypes.string.isRequired,
    setLocation: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    location: getLocation(state)
});

const mapDispatchToProps = dispatch => ({
    setLocation: location => dispatch(setLocation(location))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionOneInput);
