import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: "none",
};

export const changeColorSlice = createSlice({
    name: "color",
    initialState,
    reducers: {
        changeColor: (state, action) => {
            state.value = action;
        }
    }
});

export const { changeColor } = changeColorSlice.actions;
export default changeColorSlice.reducer;