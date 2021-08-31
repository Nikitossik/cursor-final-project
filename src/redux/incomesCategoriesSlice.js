import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

let initialState = [
  {
    value: "salary",
    label: `Salary / Pension`,
    groupCategory: "salary-and-pension",
  },
  {
    value: "allowances",
    label: `Allowances`,
    groupCategory: "salary-and-pension",
  },
  {
    value: "bank",
    label: `Bank Interest payments`,
    groupCategory: "interest-income",
  },
  {
    value: "dividends",
    label: `Dividends`,
    groupCategory: "interest-income",
  },
  {
    value: "rent",
    label: `Rental income`,
    groupCategory: "rental-and-sale-income",
  },
  {
    value: "sales",
    label: `Sale income`,
    groupCategory: "rental-and-sale-income",
  },
];

const reduxState = JSON.parse(localStorage.getItem("reduxState"));

if (reduxState) initialState = reduxState.incomesCategories || initialState;

export const slice = createSlice({
  name: "incomesCategories",
  initialState: initialState,
  reducers: {
    addIncomesCategories: (state, action) => {
      state.push({ ...action.payload, id: uuidv4() });
      return state;
    },
  },
});

export const { addIncomesCategories } = slice.actions;

export const selectIncomesCategories = (state) => state.incomesCategories;

export default slice.reducer;
