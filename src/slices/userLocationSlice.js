/**
 * @file File that contains a Redux slice for the user location.
 * @author Jay Bhatt
 */

import { createSlice } from "@reduxjs/toolkit";
import * as Location from "expo-location";
import STRINGS from "../utils/strings";

/**
 * The initial state for **userLocationSlice**.
 *
 * @type {{errorMessage: string, userLocation: {longitudeDelta: number,
 *       latitudeDelta: number, latitude: number, longitude: number}, status:
 *       string}}
 */
const initialState = {
    // The variable status consists of the following three states: "loading",
    // "resolved", and "rejected".
    status: STRINGS.userLocation.status.loading,
    userLocation: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    },
    errorMessage: "",
};

/**
 * The slice containing the reducers and actions related to the user location.
 *
 * @type {import("@reduxjs/toolkit").Slice<{errorMessage: string, userLocation:
 *       {longitudeDelta: number, latitudeDelta: number, latitude: number,
 *       longitude: number}, status: string}, {userLocationResolved:
 *       reducers.userLocationResolved, userLocationLoading:
 *       reducers.userLocationLoading, userLocationRejected:
 *       reducers.userLocationRejected}, string>}
 */
const userLocationSlice = createSlice({
    name: STRINGS.userLocation.name,
    initialState,
    reducers: {
        /**
         * The action creator for setting the status to "loading" and resetting
         * the error message.
         *
         * @param {Object} state The state of **userLocationSlice**.
         */
        userLocationLoading: (state) => {
            state.status = STRINGS.userLocation.status.loading;
            state.errorMessage = "";
        },

        /**
         * The action creator for setting the status to "resolved", resetting
         * the error message, and updating the user's location.
         *
         * @param {Object} state The state of **userLocationSlice**.
         * @param {Object} action An action with a payload containing the
         *                        longitude and latitude.
         */
        userLocationResolved: (state, action) => {
            state.status = STRINGS.userLocation.status.resolved;
            state.errorMessage = "";

            state.userLocation.latitude = action.payload.latitude;
            state.userLocation.longitude = action.payload.longitude;
        },

        /**
         * The action creator for setting the status to "rejected" and resetting
         * the error message.
         *
         * @param {Object} state The state of **userLocationSlice**.
         * @param {Object} action An action with a payload containing the error
         *                        message.
         */
        userLocationRejected: (state, action) => {
            state.status = STRINGS.userLocation.status.rejected;
            state.errorMessage = action.payload;
        },
    },
});

/**
 * The action creators for **userLocationSlice**.
 */
export const {
    userLocationLoading,
    userLocationResolved,
    userLocationRejected,
} = userLocationSlice.actions;

/**
 * A thunk that fetches the user's location.
 *
 * @returns {(function(*): Promise<void>)|*} A promise which fulfills when the
 *                                           user's location is resolved or
 *                                           rejected (aka. not found).
 */
export const fetchUserLocation = () => async (dispatch) => {
    dispatch(userLocationLoading());

    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== STRINGS.userLocation.granted) {
        dispatch(userLocationRejected(STRINGS.userLocation.rejected));
    }

    const userLocation = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest,
    });

    // noinspection JSCheckFunctionSignatures
    dispatch(
        userLocationResolved({
            latitude: userLocation.coords.latitude,
            longitude: userLocation.coords.longitude,
        }),
    );
};

export default userLocationSlice.reducer;
