import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CLOTHING from "../../assets/clothing.jpg";
import AUTO from "../../assets/auto.jpg";
import FOOD from "../../assets/food.jpg";
import PAYMENTS from "../../assets/payments.jpg";
import EDUCATION from "../../assets/education.jpg";
import HOUSEWARE from "../../assets/houseware.jpg";
import HEALTH from "../../assets/med.jpg";

import INTEREST from "../../assets/interest.jpg";
import RENT from "../../assets/rent.jpg";
import SALARY from "../../assets/salary.jpg";
import OTHER from "../../assets/other.jpg";

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

export const charges_groups = [
    {
        id: 1,
        value: 'food',
        label: `Food`,
        icon: <FontAwesomeIcon icon={faUtensils} />,
        background: FOOD,
        name: 'group-category'
    },
    {
        id: 2,
        value: "clothing-and-shoes",
        label: "Сlothing & Shoes",
        icon: <FontAwesomeIcon icon={faTshirt} />,
        background: CLOTHING,
        name: 'group-category'
    },
    {
        id: 3,
        value: 'education-and-vacation',
        label: "Education & Vacation",
        icon: <FontAwesomeIcon icon={faUserGraduate} />,
        background: EDUCATION,
        name: 'group-category'
    },
    {
        id: 4,
        value: "car-and-transport-services",
        label: "Сar & Transport Services",
        icon: <FontAwesomeIcon icon={faCar} />,
        background: AUTO,
        name: 'group-category'
    },
    {
        id: 5,
        value: "bill-payments",
        label: "Bill Payments",
        icon: <FontAwesomeIcon icon={faFileInvoiceDollar} />,
        background: PAYMENTS,
        name: 'group-category'
    },
    {
        id: 6,
        value: "health-and-beauty",
        label: "Health & Beauty",
        icon: <FontAwesomeIcon icon={faMedkit} />,
        background: HEALTH,
        name: 'group-category'
    },
    {
        id: 7,
        value: "household-appliances-and-homeware",
        label: "Household Appliances & Homeware",
        icon: <FontAwesomeIcon icon={faLaptopHouse} />,
        background: HOUSEWARE,
        name: 'group-category'
    },
];

export const incomes_groups = [
    {
        id: 1,
        value: 'salary-and-pension',
        label: "Salary & Pension",
        icon: <FontAwesomeIcon icon={faCreditCard} />,
        background: SALARY,
        name: 'group-category'
    },
    {
        id: 2,
        value: 'interest-income',
        label: "Interest Income",
        icon: <FontAwesomeIcon icon={faPercent} />,
        background: INTEREST,
        name: 'group-category'
    },
    {
        id: 3,
        value: 'rental-and-sale-income',
        label: "Rental & Sale Income",
        icon: <FontAwesomeIcon icon={faPiggyBank} />,
        background: RENT,
        name: 'group-category'
    },
    {
        id: 4,
        value: 'other-incomes',
        label: "Other Incomes",
        icon: <FontAwesomeIcon icon={faGift} />,
        background: OTHER,
        name: 'group-category'
    }
];