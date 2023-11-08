import { configureStore } from "@reduxjs/toolkit";
import clinicsSlice from "../slices/clinicsSlice";
import userLocationSlice from "../slices/userLocationSlice";

const store = configureStore({
    reducer: {
        userLocation: userLocationSlice,
        clinics: clinicsSlice,
    },
});

export default store;
