import React, {Component} from 'react';
import {setLocation} from "../../actions/symptom-survey/symptoms";
import {getLocation} from "../../selectors/symptom-survey/symptoms";
import {TextInput} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import View from "react-native-web/dist/exports/View";
import Text from "react-native-web/src/exports/Text";
import {ScrollView} from "react-native-web";

const SurveyLocationTextInput = ({setLocation, location}) => {
    // return (
    //     <View>
    //         <TextInput
    //             style={{height: 40, borderColor: 'gray', borderWidth: 1}}
    //             onChangeText={text => setLocation(text)}
    //             value={location}
    //         />
    //     </View>
    // );
    return (
        <View>
            <ScrollView>
                <Text>Hello</Text>
            </ScrollView>
        </View>
    )
};

// export default function SurveyLocationTextInput() {
//     const [value, onChangeText] = React.useState('');
//
//     return (
//         <TextInput
//             style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
//             onChangeText={text => onChangeText(text)}
//             value={value}
//         />
//     );
// }
//
SurveyLocationTextInput.propTypes = {
    location: PropTypes.string.isRequired,
    setLocation: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    location: getLocation(state)
});

const mapDispatchToProps = dispatch => ({
    setLocation: location => dispatch(setLocation(location))
});

export default connect(mapStateToProps, mapDispatchToProps)(SurveyLocationTextInput);
