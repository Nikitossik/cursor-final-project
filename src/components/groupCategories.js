import CLOTHING from "../assets/clothing.jpg";
import AUTO from "../assets/auto.jpg";
import FOOD from "../assets/food.jpg";
import PAYMENTS from "../assets/payments.jpg";
import EDUCATION from "../assets/education.jpg";
import HOUSEWARE from "../assets/houseware.jpg";
import HEALTH from "../assets/med.jpg";

import INTEREST from "../assets/interest.jpg";
import RENT from "../assets/rent.jpg";
import SALARY from "../assets/salary.jpg";
import OTHER from "../assets/other.jpg";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUtensils,
    faCar,
    faUserGraduate,
    faTshirt,
    faFileInvoiceDollar,
    faMedkit,
    faLaptopHouse,
    faCreditCard,
    faPercent,
    faPiggyBank,
    faGift
} from "@fortawesome/free-solid-svg-icons";

import { v4 as uuidv4 } from "uuid";

export const charges_groups = [
    {
        id: uuidv4(),
        value: 'food',
        label: `Food`,
        icon: faUtensils,
        background: FOOD,
    },
    {
        id: uuidv4(),
        value: "clothing-shoes",
        label: "Сlothing & Shoes",
        icon: faTshirt,
        background: CLOTHING,
    },
    {
        id: uuidv4(),
        value: 'education-vacation',
        label: "Education & Vacation",
        icon: faUserGraduate,
        background: EDUCATION,
    },
    {
        id: uuidv4(),
        value: "car-transport-services",
        label: "Car & Transport Services",
        icon: faCar,
        background: AUTO,
    },
    {
        id: uuidv4(),
        value: "bill-payments",
        label: "Bill Payments",
        icon: faFileInvoiceDollar,
        background: PAYMENTS,
    },
    {
        id: uuidv4(),
        value: "health-beauty",
        label: "Health & Beauty",
        icon: faMedkit,
        background: HEALTH,
    },
    {
        id: uuidv4(),
        value: "household-appliances-homeware",
        label: "Household Appliances & Homeware",
        icon: faLaptopHouse,
        background: HOUSEWARE,
    },
];

export const incomes_groups = [
    {
        id: uuidv4(),
        value: 'salary-pension',
        label: "Salary & Pension",
        icon: faCreditCard,
        background: SALARY
    },
    {
        id: uuidv4(),
        value: 'interest-income',
        label: "Interest Income",
        icon: faPercent,
        background: INTEREST
    },
    {
        id: uuidv4(),
        value: 'rental-sale-income',
        label: "Rental & Sale Income",
        icon: faPiggyBank,
        background: RENT
    },
    {
        id: uuidv4(),
        value: 'other-incomes',
        label: "Other Incomes",
        icon: faGift,
        background: OTHER
    }
];