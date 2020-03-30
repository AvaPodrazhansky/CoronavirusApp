import {combineReducers} from 'redux';
import latestNews from "./latest-news";

const news = combineReducers({
    latestNews
});

export default news;
