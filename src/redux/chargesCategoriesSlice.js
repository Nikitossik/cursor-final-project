import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import {
  faUtensils,
  faCar,
  faUserGraduate,
  faTshirt,
  faFileInvoiceDollar,
  faMedkit,
  faLaptopHouse,
} from "@fortawesome/free-solid-svg-icons";

let initialState = [
  {
    id: uuidv4(),
    value: "food",
    label: `Food`,
    groupCategory: "food",
    icon: faUtensils,
  },
  {
    id: uuidv4(),
    value: "clothing",
    label: `Сlothing`,
    groupCategory: "clothing-shoes",
    icon: faTshirt,
  },
  {
    id: uuidv4(),
    value: "shoes",
    label: `Shoes`,
    groupCategory: "clothing-shoes",
    icon: faTshirt,
  },
  {
    id: uuidv4(),
    value: "vacation",
    label: `Vacation`,
    groupCategory: "education-vacation",
    icon: faUserGraduate,
  },
  {
    id: uuidv4(),
    value: "education",
    label: `Education`,
    groupCategory: "education-vacation",
    icon: faUserGraduate,
  },
  {
    id: uuidv4(),
    value: "hobby-sections",
    label: `Hobby & Sections`,
    groupCategory: "education-vacation",
    icon: faUserGraduate,
  },
  {
    id: uuidv4(),
    value: "car-fuel",
    label: `Car & Fuel`,
    groupCategory: "car-transport-services",
    icon: faCar,
  },
  {
    id: uuidv4(),
    value: "transport-taxi",
    label: `Transport & Taxi`,
    groupCategory: "car-transport-services",
    icon: faCar,
  },
  {
    id: uuidv4(),
    value: "utilities-telephone-internet",
    label: `Utilities / Telephone / Internet`,
    groupCategory: "bill-payments",
    icon: faFileInvoiceDollar,
  },
  {
    id: uuidv4(),
    value: "taxes",
    label: `Taxes`,
    groupCategory: "bill-payments",
    icon: faFileInvoiceDollar,
  },
  {
    id: uuidv4(),
    value: "medical-services",
    label: `Medical services`,
    groupCategory: "health-beauty",
    icon: faMedkit,
  },
  {
    id: uuidv4(),
    value: "cosmetology-sport",
    label: `Сosmetology / Sport`,
    groupCategory: "health-beauty",
    icon: faMedkit,
  },
  {
    id: uuidv4(),
    value: "appliances",
    label: `Household Appliances`,
    groupCategory: "household-appliances-homeware",
    icon: faLaptopHouse,
  },
  {
    id: uuidv4(),
    value: "homeware",
    label: `Homeware`,
    groupCategory: "household-appliances-homeware",
    icon: faLaptopHouse,
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
        state.findIndex((item) => item.id === action.payload.id),
        1
      );
      return state;
    },
    editChargesCategories: (state, action) => {
      state.map((item) => {
        item.id === action.payload.id
          ? (item.label = action.payload.label)
          : (item.label = item.label);
      });
      return state;
    },
  },
});

export const {
  addChargesCategories,
  deleteChargesCategories,
  editChargesCategories,
} = slice.actions;

export const selectChargesCategories = (state) => state.chargesCategories;

export default slice.reducer;
