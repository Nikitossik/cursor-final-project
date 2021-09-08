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
        state.findIndex((item) => item.id === action.payload.id),
        1
      );
      return state;
    },
    editCharge: (state, action) => {
      state.map((item) => {
        if (item.id === action.payload.id) {
          item.money = action.payload.money;
          item.description = action.payload.description;
          item.date = action.payload.date;
        }
      });
      return state;
    },
  },
});

export const { addCharge, hydrateCharges, deleteCharge, editCharge } =
  slice.actions;

export const selectCharges = (state) => state.charges;

export default slice.reducer;
