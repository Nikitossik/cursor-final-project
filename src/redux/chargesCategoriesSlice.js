import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

let initialState = [
  {
    id: 0,
    value: "food",
    label: `Food`,
    groupCategory: "food",
  },
  {
    id: 1,
    value: "clothing",
    label: `Сlothing`,
    groupCategory: "clothing-and-shoes",
  },
  {
    id: 2,
    value: "shoes",
    label: `Shoes`,
    groupCategory: "clothing-and-shoes",
  },
  {
    id: 3,
    value: "vacation",
    label: `Vacation`,
    groupCategory: "education-and-vacation",
  },
  {
    id: 4,
    value: "education",
    label: `Education`,
    groupCategory: "education-and-vacation",
  },
  {
    id: 5,
    value: "hobby",
    label: `Hobby / Sections`,
    groupCategory: "education-and-vacation",
  },
  {
    id: 6,
    value: "car",
    label: `Car / Fuel`,
    groupCategory: "car-and-transport-services",
  },
  {
    id: 7,
    value: "transport",
    label: `Transport / Taxi`,
    groupCategory: "car-and-transport-services",
  },
  {
    id: 8,
    value: "utilities",
    label: `Utilities / Telephone / Internet`,
    groupCategory: "bill-payments",
  },
  {
    id: 9,
    value: "taxes",
    label: `Taxes`,
    groupCategory: "bill-payments",
  },
  {
    id: 10,
    value: "medicine",
    label: `Medical services`,
    groupCategory: "health-and-beauty",
  },
  {
    id: 11,
    value: "cosmetology",
    label: `Сosmetology / Sport`,
    groupCategory: "health-and-beauty",
  },
  {
    id: 12,
    value: "appliances",
    label: `Household Appliances`,
    groupCategory: "household-appliances-and-homeware",
  },
  {
    id: 13,
    value: "homeware",
    label: `Homeware`,
    groupCategory: "household-appliances-and-homeware",
  },
];

const reduxState = JSON.parse(localStorage.getItem("reduxState"));

if (reduxState) initialState = reduxState.chargesCategories || initialState;

export const slice = createSlice({
  name: "chargesCategories",
  initialState: initialState,
  reducers: {
    addChargesCategories: (state, action) => {
      state.push({ ...action.payload, id: uuidv4() });
      return state;
    },
    deleteChargesCategories: (state, action) => {
      state.splice(
        state.findIndex((item) => item.id === Number(action.payload.id)),
        1
      );
      return state;
    },
  },
});

export const { addChargesCategories, deleteChargesCategories } = slice.actions;

export const selectChargesCategories = (state) => state.chargesCategories;

export default slice.reducer;
