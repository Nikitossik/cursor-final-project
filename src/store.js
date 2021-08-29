import { configureStore } from "@reduxjs/toolkit";
import chargesReducer from "./redux/chargesSlice";
import incomesReducer from "./redux/incomesSlice";
import chargesCategoriesReducer from "./redux/chargesCategoriesSlice";
import incomesCategoriesReducer from "./redux/incomesCategoriesSlice";
import balanceReducer from './redux/balanceSlice';
const store = configureStore({
  reducer: {
    charges: chargesReducer,
    incomes: incomesReducer,
    chargesCategories: chargesCategoriesReducer,
    incomesCategories: incomesCategoriesReducer,
    balance: balanceReducer,
  },
});

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
});


export default store;