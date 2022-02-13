import { configureStore } from "@reduxjs/toolkit";
import setNavBarBgColorReducer from "../features/setNavBarBgColor/setNavBarBgColor";
import citiesReducer from "../features/cities/cities";

export const store = configureStore({
    reducer: {
        navBarBgColor: setNavBarBgColorReducer,
        cities: citiesReducer
    },
});

export default store;
