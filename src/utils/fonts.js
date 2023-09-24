/**
 * @file File that preloads the fonts.
 * @author Jay Bhatt
 */

import * as Font from "expo-font";

/**
 * An array that asynchronously preloads the specified fonts.
 *
 * @type {Promise<void>[]}
 */
const FONT_ASSETS = [
    {
        spaceMonoRegular: require("../../assets/fonts/SpaceMono-Regular.ttf"),
    },
].map((x) => Font.loadAsync(x));

export default FONT_ASSETS;
