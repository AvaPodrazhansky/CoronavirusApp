/**
 * @file File that creates a Metro config object.
 * @description Metro is a JavaScript bundler that takes in an entry file and
 *              various options, and gives you back a single JavaScript file
 *              that includes all the code and its dependencies.
 * @author Jay Bhatt
 */

// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import("expo/metro-config").MetroConfig} */
const config = getDefaultConfig(__dirname);

module.exports = config;
