import { configureStore } from "@reduxjs/toolkit";
import changeColorReducer from "../features/changeColor/changeColorSlice";

export const store = configureStore({
    reducer: {
        changeColor: changeColorReducer,
    },
});

export default store;
