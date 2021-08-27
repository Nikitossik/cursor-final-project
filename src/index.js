import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store.js";

import { hydrateCharges } from './redux/chargesSlice';
import { hydrateIncomes } from './redux/incomesSlice';

const getItemFromLocalStorage = (item) => {
  try {
    const persistedState = localStorage.getItem('reduxState')[item];
    if (persistedState)
      return JSON.parse(persistedState)
  }
  catch (e) {
    console.log(e)
  }
}

const charges = getItemFromLocalStorage('charges');
const incomes = getItemFromLocalStorage('incomes');

if (charges) {
  store.dispatch(hydrateCharges(charges))
}

if (incomes) {
  store.dispatch(hydrateIncomes(incomes))
}


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
