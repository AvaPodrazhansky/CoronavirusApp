/**
 * @file File with the main component of the React Native application.
 * @author Jay Bhatt
 */

import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "./src/store/store";
import FONT_ASSETS from "./src/utils/fonts";
import BottomNavigationBar from "./src/navigation/BottomNavigationBar";
import Spinner from "./src/components/spinner/Spinner";

/**
 * The main component of the React Native application.
 *
 * @returns {JSX.Element} The main component of the React Native application.
 * @constructor
 */
const App = () => {
    const [loading, setLoading] = useState(true);

    /**
     * Loads all application assets.
     *
     * @returns {Promise<void>} A promise which fulfills when the asset loading
     *                          has completed.
     */
    const loadAssets = async () => {
        await Promise.all([...FONT_ASSETS]);
        setLoading(false);
    };

    useEffect(() => {
        loadAssets().catch((err) => console.error(err));
    }, []);

    return loading ? (
        <Spinner />
    ) : (
        <Provider store={store}>
            <BottomNavigationBar />
        </Provider>
    );
};

export default App;
