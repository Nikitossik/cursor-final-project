// import thunk from "redux-thunk";
// import { createStore, applyMiddleware, combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import addChargeReducer from "./redux/reducers/add-charge-reducer";

// const reducer = combineReducers({
//     addChargeReducer
// })

// const store = createStore(
//     reducer,
//     composeWithDevTools(applyMiddleware(thunk))
// )

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import chargesReducer from "./redux/chargesSlice";
import incomesReducer from "./redux/incomesSlice";
import chargesCategoriesReducer from "./redux/chargesCategoriesSlice";
import incomesCategoriesReducer from "./redux/incomesCategoriesSlice";

export default configureStore({
  reducer: {
    charges: chargesReducer,
    incomes: incomesReducer,
    chargesCategories: chargesCategoriesReducer,
    incomesCategories: incomesCategoriesReducer,
  },
});
