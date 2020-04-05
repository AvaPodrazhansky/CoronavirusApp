import allReducers from "./reducers";
import thunk from "redux-thunk";
import {createStore, applyMiddleware, compose} from 'redux';

const _isDebuggingEnabled = (typeof atob !== 'undefined');
const _composeDevTools = __DEV__ && _isDebuggingEnabled;

export const store = (_composeDevTools ?
        createStore(
            allReducers,
            compose(
                applyMiddleware(thunk),
                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
            ),
        ) :
        createStore(
            allReducers,
            applyMiddleware(thunk),
        )
);