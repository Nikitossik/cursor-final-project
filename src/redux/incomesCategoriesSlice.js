import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "incomesCategories",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ ...action.payload });
    },
  },
});

export const { add } = slice.actions;

export const selectIncomesCategories = (state) => state.incomesCategories;

export default slice.reducer;
