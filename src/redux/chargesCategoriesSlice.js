import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "chargesCategories",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ ...action.payload });
    },
  },
});

export const { add } = slice.actions;

export const selectChargesCategories = (state) => state.chargesCategories;

export default slice.reducer;
