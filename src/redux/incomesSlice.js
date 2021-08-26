import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'incomes',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push({ ...action.payload });
        },
    },
});

export const { add } = slice.actions;

export const selectIncomes = state => state.incomes;

export default slice.reducer;
