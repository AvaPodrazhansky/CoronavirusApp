import {combineReducers} from 'redux';
import userLocationRetrieval from './user-location-retrieval';

const user = combineReducers({
    userLocationRetrieval
});

export default user;