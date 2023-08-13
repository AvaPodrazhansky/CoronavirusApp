/**
 * This file configures Babel. Babel is a JavaScript compiler that converts
 * ECMAScript 2015+ code into a backwards compatible version of JavaScript in
 * current and older browsers or environments.
 */

module.exports = (api) => {
    // Optimizes the build process performance by caching the config function
    // execution result
    api.cache(true);

    return {
        // Allows Babel to transform React Native code in Expo projects
        presets: ["babel-preset-expo"],
    };
};
