import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faPercent,
  faPiggyBank,
  faGift
} from "@fortawesome/free-solid-svg-icons";

let initialState = [
  {
    id: uuidv4(),
    value: "salary-pension",
    label: `Salary / Pension`,
    groupCategory: "salary-pension",
    icon: faCreditCard,
  },
  {
    id: uuidv4(),
    value: "allowances",
    label: `Allowances`,
    groupCategory: "salary-pension",
    icon: faCreditCard,
  },
  {
    id: uuidv4(),
    value: "bank-interest-payments",
    label: `Bank Interest payments`,
    groupCategory: "interest-income",
    icon: faPercent,
  },
  {
    id: uuidv4(),
    value: "dividends",
    label: `Dividends`,
    groupCategory: "interest-income",
    icon: faPercent,
  },
  {
    id: uuidv4(),
    value: "rental-income",
    label: `Rental income`,
    groupCategory: "rental-sale-income",
    icon: faPiggyBank,
  },
  {
    id: uuidv4(),
    value: "sale-income",
    label: `Sale income`,
    groupCategory: "rental-sale-income",
    icon: faGift,
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
      state.splice(state.findIndex(item => item.id === action.payload.id), 1);
      return state;
    },
  },
});

export const { addIncomesCategories, deleteIncomesCategories } = slice.actions;

export const selectIncomesCategories = (state) => state.incomesCategories;

export default slice.reducer;
