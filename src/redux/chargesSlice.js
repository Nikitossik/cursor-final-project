import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const reduxState = JSON.parse(localStorage.getItem("reduxState"));
let initialState = [];

if (reduxState) initialState = reduxState.charges || [];

export const slice = createSlice({
  name: "charges",
  initialState: initialState,
  reducers: {
    hydrateCharges: (state, action) => action.payload,
    addCharge: (state, action) => {
      state.push({ ...action.payload, id: uuidv4() });
      return state;
    },
    deleteCharge: (state, action) => {
      state.splice(
        state.findIndex((item) => item.id == action.payload.id),
        1
      );
      return state;
    },
  },
});

export const { addCharge, hydrateCharges, deleteCharge } = slice.actions;

export const selectCharges = (state) => state.charges;

export default slice.reducer;
