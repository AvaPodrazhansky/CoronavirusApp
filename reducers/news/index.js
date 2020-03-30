import {combineReducers} from 'redux';
import latestNews from "./latest-news";
import twitterNews from "./twitter-news";

const news = combineReducers({
    latestNews,
    twitterNews
});

export default news;
