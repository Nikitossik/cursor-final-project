import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'charges',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push({ ...action.payload });
        },
    },
});

export const { add } = slice.actions;

export const selectCharges = state => state.charges;

export default slice.reducer;
