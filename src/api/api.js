/**
 * @file File that contains the REST API methods.
 * @author Jay Bhatt
 */

import { APP_CLINICS_API_KEY } from "@env";
import ROUTES from "../utils/routes";

/**
 * Fetches an array of clinics that are near the user.
 *
 * @returns {Promise<Object[]>} A promise that resolves with an array of clinics
 *                              that are near the user.
 */
export const fetchClinics = () => {
    const queryParameters = {
        location: "34.010329%2C-84.482923",
        radius: 16093,
        language: "en",
        opennow: "true",
        type: "doctor",
        key: APP_CLINICS_API_KEY,
    };

    const clinicsUrl = `${ROUTES.clinics}${Object.entries(queryParameters)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join("&")}`;

    fetch(clinicsUrl)
        .then((res) => res.json())
        .then((resJson) => resJson.articles)
        .catch((err) => console.error(err));
};

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
