/**
 * @file File that contains the REST API methods.
 * @author Jay Bhatt
 */

import ROUTES from "../utils/routes";

/**
 * Fetches an array of COVID-19 news articles from the US.
 *
 * @returns {Promise<Object[]>} A promise that resolves with an array of
 *                              COVID-19 news articles from the US.
 */
export const fetchArticles = () =>
    /** @namespace resJson.articles **/
    fetch(ROUTES.news)
        .then((res) => res.json())
        .then((resJson) => resJson.articles)
        .catch((err) => console.error(err));
