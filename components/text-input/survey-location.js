import React, { Component } from 'react';
import { TextInput } from 'react-native';

export default function SurveyLocationTextInput() {
    const [value, onChangeText] = React.useState('');

    return (
        <TextInput
            style={{ height: 40, borderColor: 'black', borderWidth: 1 }}
            onChangeText={text => onChangeText(text)}
            value={value}
        />
    );
}