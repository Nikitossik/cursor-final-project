import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const slice = createSlice({
    name: 'charges',
    initialState: [],
    reducers: {
        hydrateCharges: (state, action) => action.payload,
        addCharge: (state, action) => {
            state.push({ ...action.payload, id: uuidv4() });
        }
    },
});

export const { addCharge, hydrateCharges } = slice.actions;

export const selectCharges = state => state.charges;

export default slice.reducer;
