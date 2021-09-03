import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const reduxState = JSON.parse(localStorage.getItem("reduxState"));
let initialState = [];

if (reduxState) initialState = reduxState.incomes || [];

export const slice = createSlice({
  name: "incomes",
  initialState: initialState,
  reducers: {
    hydrateIncomes: (state, action) => action.payload,
    addIncome: (state, action) => {
      state.push({ ...action.payload, id: uuidv4() });
      return state;
    },
    deleteIncome: (state, action) => {
      state.splice(
        state.findIndex((item) => item.id === action.payload.id),
        1
      );
      return state;
    },
  },
});

export const { addIncome, hydrateIncomes, deleteIncome } = slice.actions;

export const selectIncomes = (state) => state.incomes;

export default slice.reducer;
