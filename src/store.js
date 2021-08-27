import { configureStore } from "@reduxjs/toolkit";
import chargesReducer from "./redux/chargesSlice";
import incomesReducer from "./redux/incomesSlice";
import chargesCategoriesReducer from "./redux/chargesCategoriesSlice";
import incomesCategoriesReducer from "./redux/incomesCategoriesSlice";

const store = configureStore({
  reducer: {
    charges: chargesReducer,
    incomes: incomesReducer,
    chargesCategories: chargesCategoriesReducer,
    incomesCategories: incomesCategoriesReducer,
  },
});

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
});


export default store;