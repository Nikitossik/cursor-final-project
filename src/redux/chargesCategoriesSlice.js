import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

let initialState = {
  chargesCategories: [
    {
      id: 1,
      value: "food",
      label: `Food`,
      groupCategory: "food",
    },
    {
      id: 2,
      value: "clothing",
      label: `Сlothing`,
      groupCategory: "clothing-and-shoes",
    },
    {
      id: 3,
      value: "shoes",
      label: `Shoes`,
      groupCategory: "clothing-and-shoes",
    },
    {
      id: 4,
      value: "vacation",
      label: `Vacation`,
      groupCategory: "education-and-vacation",
    },
    {
      id: 5,
      value: "education",
      label: `Education`,
      groupCategory: "education-and-vacation",
    },
    {
      id: 6,
      value: "hobby",
      label: `Hobby / Sections`,
      groupCategory: "education-and-vacation",
    },
    {
      id: 7,
      value: "car",
      label: `Car / Fuel`,
      groupCategory: "car-and-transport-services",
    },
    {
      id: 8,
      value: "transport",
      label: `Transport / Taxi`,
      groupCategory: "car-and-transport-services",
    },
    {
      id: 9,
      value: "utilities",
      label: `Utilities / Telephone / Internet`,
      groupCategory: "bill-payments",
    },
    {
      id: 10,
      value: "taxes",
      label: `Taxes`,
      groupCategory: "bill-payments",
    },
    {
      id: 11,
      value: "medicine",
      label: `Medical services`,
      groupCategory: "health-and-beauty",
    },
    {
      id: 12,
      value: "cosmetology",
      label: `Сosmetology / Sport`,
      groupCategory: "health-and-beauty",
    },
    {
      id: 13,
      value: "appliances",
      label: `Household Appliances`,
      groupCategory: "household-appliances-and-homeware",
    },
    {
      id: 14,
      value: "homeware",
      label: `Homeware`,
      groupCategory: "household-appliances-and-homeware",
    },
  ],
};

const reduxState = JSON.parse(localStorage.getItem("reduxState"));

if (reduxState)
  initialState = reduxState.chargesCategories || initialState.chargesCategories;

export const slice = createSlice({
  name: "chargesCategories",
  initialState: initialState.chargesCategories,
  reducers: {
    addChargesCategories: (state, action) => {
      state.push({ ...action.payload, id: uuidv4() });
    },
  },
});

export const { addChargesCategories } = slice.actions;

export const selectChargesCategories = (state) => state.chargesCategories;

export default slice.reducer;
