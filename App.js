import * as React from 'react';
import {SplashScreen} from 'expo';
import * as Font from 'expo-font';
import {FontAwesome, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import {Provider} from 'react-redux';
import useLinking from './navigation/useLinking';
import Root from "./Root";
import {store} from './store-creator';
import Spinner from './components/loading';

export default function App(props) {
    const [isLoadingComplete, setLoadingComplete] = React.useState(false);
    const [initialNavigationState, setInitialNavigationState] = React.useState();
    const containerRef = React.useRef();
    const {getInitialState} = useLinking(containerRef);

    // Load any resources or data that we need prior to rendering the app
    React.useEffect(() => {

        if (__DEV__) {
            console.log('Development Mode');
        } else {
            console.log('Production Mode')
        }

        async function loadResourcesAndDataAsync() {
            try {
                SplashScreen.preventAutoHide();

                // Load our initial navigation state
                setInitialNavigationState(await getInitialState());

                // Load fonts
                await Font.loadAsync({
                    ...Ionicons.font,
                    'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
                    ...MaterialCommunityIcons.font,
                    ...FontAwesome.font
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

    // if (!isLoadingComplete && !props.skipLoadingScreen) {
    //     return <Spinner/>;
    // } else {
        return (
            <Provider store={store}>
                <Root initialNavigationState={initialNavigationState} containerRef={containerRef}/>
            </Provider>
        );
    // }
}
