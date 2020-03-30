import {EMBED_HTML} from "../../actions/news/twitter-news";

const defaultState = {
    html: null
};

const twitterNews = (state = defaultState, action) => {
    switch (action.type) {
        case EMBED_HTML:
            return {
                ...state,
                html: action.payload
            };
        default:
            return state;
    }
};

export default twitterNews;
