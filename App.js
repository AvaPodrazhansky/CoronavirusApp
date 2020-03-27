import * as React from 'react';
import {SplashScreen} from 'expo';
import * as Font from 'expo-font';
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers';
import useLinking from './navigation/useLinking';
import thunk from "redux-thunk";
import Root from "./Root";

const store = createStore(allReducers, applyMiddleware(thunk));

export default function App(props){
    const [isLoadingComplete, setLoadingComplete] = React.useState(false);
    const [initialNavigationState, setInitialNavigationState] = React.useState();
    const containerRef = React.useRef();
    const {getInitialState} = useLinking(containerRef);

    // Load any resources or data that we need prior to rendering the app
    React.useEffect(() => {

        async function loadResourcesAndDataAsync() {
            try {
                SplashScreen.preventAutoHide();

                // Load our initial navigation state
                setInitialNavigationState(await getInitialState());

                // Load fonts
                await Font.loadAsync({
                    ...Ionicons.font,
                    'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
                    ...MaterialCommunityIcons.font
                });

            } catch (e) {
                // We might want to provide this error information to an error reporting service
                console.warn(e);
            } finally {
                setLoadingComplete(true);
                SplashScreen.hide();
            }
        }

        loadResourcesAndDataAsync();
    }, []);

    if (!isLoadingComplete && !props.skipLoadingScreen) {
        return null;
    } else {
        return (
            <Provider store={store}>
                <Root initialNavigationState={initialNavigationState} containerRef={containerRef}/>
            </Provider>
        );
    }
}
