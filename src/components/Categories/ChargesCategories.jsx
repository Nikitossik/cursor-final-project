import React, { useState} from "react";
import { AddButton, CategoryBlock} from '../styles';
import AddCategoryForm from '../AddCategoryForm';
import CategoryCard from './CategoryCard';
import { useSelector } from 'react-redux';
import { selectChargesCategories } from '../../redux/chargesCategoriesSlice';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CLOTHING from "../../assets/clothing.jpg";
import AUTO from "../../assets/auto.jpg";
import FOOD from "../../assets/food.jpg";
import PAYMENTS from "../../assets/payments.jpg";
import EDUCATION from "../../assets/education.jpg";
import HOUSEWARE from "../../assets/houseware.jpg";
import HEALTH from "../../assets/med.jpg";
import {
  faUtensils,
  faCar,
  faUserGraduate,
  faTshirt,
  faFileInvoiceDollar,
  faMedkit,
  faLaptopHouse,
} from "@fortawesome/free-solid-svg-icons";

function ChargesCategories() {
    const groupCategories = [
  {
    id: 1,
    value: 'food',
    label: `Food`,
    icon: <FontAwesomeIcon icon={faUtensils} />,
    background: FOOD
  },
  {
    id: 2,
    value: "clothing-and-shoes",
    label: "Сlothing & Shoes",
    icon: <FontAwesomeIcon icon={faTshirt} />,
    background: CLOTHING,
  },
  {
    id: 3,
    value: 'education-and-vacation',
    label: "Education & Vacation",
    icon: <FontAwesomeIcon icon={faUserGraduate} />,
    background: EDUCATION
  },
  {
    id: 4,
    value: "car-and-transport-services",
    label: "Сar & Transport Services",
      icon: <FontAwesomeIcon icon={faCar} />,
    background: AUTO,
  },
  {
    id: 5,
    value: "bill-payments",
    label: "Bill Payments",
    icon: <FontAwesomeIcon icon={faFileInvoiceDollar}/>,
    background: PAYMENTS,
  },
  {
    id: 6,
    value: "health-and-beauty",
    label: "Health & Beauty",
    icon: <FontAwesomeIcon icon={faMedkit} />,
    background: HEALTH,
  },
  {
    id: 7,
    value: "household-appliances-and-homeware",
    label: "Household Appliances & Homeware",
    icon: <FontAwesomeIcon icon={faLaptopHouse} />,
    background: HOUSEWARE,
  },
];
    const [formActive, setFormActive] = useState(false);

    const chargesCategories = useSelector(selectChargesCategories);

    return (
            <section className='charges-section section'>
            <AddButton onClick={() => setFormActive(true)}>Add more charges categories</AddButton>
            <div>
                <CategoryBlock>
                    {groupCategories.map((group) => (
            <CategoryCard {...group} key={group.id}></CategoryCard>
          ))}
                </CategoryBlock>
            </div>

            <AddCategoryForm active={formActive} setActive={setFormActive} title={"chargesCategories"} groupCategories={groupCategories}/>
            </section>
    )
}

export default ChargesCategories;