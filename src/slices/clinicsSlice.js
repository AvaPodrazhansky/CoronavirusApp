import { createSlice } from "@reduxjs/toolkit";
import STRINGS from "../utils/strings";
import { fetchClinics } from "../api/api";

// Define the initial state
const initialState = {
    // The variable status consists of the following three states: "loading",
    // "resolved", and "rejected".
    status: STRINGS.status.loading,
    clinics: [],
    errorMessage: "",
};

// Create a slice
const clinicsSlice = createSlice({
    name: STRINGS.clinics,
    initialState,
    reducers: {
        clinicsLoading: (state) => {
            state.status = STRINGS.status.loading;
            state.errorMessage = "";
        },
        clinicsResolved: (state, action) => {
            state.status = STRINGS.status.resolved;
            state.errorMessage = "";

            state.clinics = action.payload;
        },
        clinicsRejected: (state, action) => {
            state.status = STRINGS.status.rejected;
            state.errorMessage = action.payload;
        },
    },
});

// Export actions
export const { clinicsLoading, clinicsResolved, clinicsRejected } =
    clinicsSlice.actions;

// Define a thunk
export const getClinics = () => async (dispatch) => {
    dispatch(clinicsLoading());

    fetchClinics()
        .then((resJson) => {
            dispatch(clinicsResolved(resJson.results));
        })
        .catch((err) => console.error(err));
};

// Export the reducer
export default clinicsSlice.reducer;
