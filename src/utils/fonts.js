/**
 * @file File that preloads the fonts.
 * @author Jay Bhatt
 */

import * as Font from "expo-font";

/**
 * An array of promises that asynchronously preload the specified fonts.
 *
 * @type {Promise<void>[]}
 */
const FONT_ASSETS = [
    {
        spaceMonoRegular: require("../../assets/fonts/SpaceMono-Regular.ttf"),
    },
].map((x) => Font.loadAsync(x));

export default FONT_ASSETS;
