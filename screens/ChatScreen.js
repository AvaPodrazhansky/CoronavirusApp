import * as React from 'react';
import { WebView } from 'react-native-webview';

const ChatScreen = () => {
    return (
    <WebView source={{ uri: 'https://healthbotcontainersample4675.azurewebsites.net/' }} />
    );
};

ChatScreen.navigationOptions = {
    header: null,
};

export default ChatScreen
