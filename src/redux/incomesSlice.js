import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const reduxState = JSON.parse(localStorage.getItem('reduxState'));
let initialState = [];

if (reduxState) initialState = reduxState.incomes || [];

export const slice = createSlice({
    name: 'incomes',
    initialState: initialState,
    reducers: {
        hydrateIncomes: (state, action) => action.payload,
        addIncome: (state, action) => {
            state.push({ ...action.payload, id: uuidv4() });
        }
    },
});

export const { addIncome, hydrateIncomes } = slice.actions;

export const selectIncomes = state => state.incomes;

export default slice.reducer;
