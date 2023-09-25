/**
 * @file File that contains the API routes.
 * @author Jay Bhatt
 */

import { APP_NEWS_API_KEY } from "@env";

/**
 * A JSON object that maps a specific route category to its corresponding URL.
 *
 * @type {{news: string}}
 */
const ROUTES = {
    news:
        "https://newsapi.org/v2/top-headlines?country=us&category=health" +
        `&q=covid-19&apiKey=${APP_NEWS_API_KEY}`,
};

export default ROUTES;
