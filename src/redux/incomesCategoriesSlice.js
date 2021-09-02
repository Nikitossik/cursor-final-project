import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

let initialState = [
  {
    id: 0,
    value: "salary",
    label: `Salary / Pension`,
    groupCategory: "salary-and-pension",
  },
  {
    id: 1,
    value: "allowances",
    label: `Allowances`,
    groupCategory: "salary-and-pension",
  },
  {
    id: 2,
    value: "bank",
    label: `Bank Interest payments`,
    groupCategory: "interest-income",
  },
  {
    id: 3,
    value: "dividends",
    label: `Dividends`,
    groupCategory: "interest-income",
  },
  {
    id: 4,
    value: "rent",
    label: `Rental income`,
    groupCategory: "rental-and-sale-income",
  },
  {
    id: 5,
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
    deleteIncomesCategories: (state, action) => {
      state.splice(
        state.findIndex((item) => item.id === Number(action.payload.id)),
        1
      );
      return state;
    },
  },
});

export const { addIncomesCategories, deleteIncomesCategories } = slice.actions;

export const selectIncomesCategories = (state) => state.incomesCategories;

export default slice.reducer;
