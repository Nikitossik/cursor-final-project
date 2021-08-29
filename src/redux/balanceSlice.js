import { createSlice } from "@reduxjs/toolkit";

const reduxState = JSON.parse(localStorage.getItem('reduxState'));
let initialState = 0;

if (reduxState) initialState = reduxState.balance || 0;

export const slice = createSlice({
    name: "balance",
    initialState: initialState,
    reducers: {
        calculate: (state, action) => {
            state += action.payload;
            return state;
        },
    },
});

export const { calculate } = slice.actions;

export const selectBalance = (state) => state.balance;

export default slice.reducer;
