import React, { useState} from "react";
import { AddButton, CategoryBlock} from '../styles';
import AddCategoryForm from '../AddCategoryForm';
import CategoryCard from './CategoryCard';
import { useSelector } from 'react-redux';
import { selectIncomesCategories } from '../../redux/incomesCategoriesSlice';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCreditCard,
  faPercent,
  faPiggyBank,
  faGift,
} from "@fortawesome/free-solid-svg-icons";
import INTEREST from "../../assets/interest.jpg";
import RENT from "../../assets/rent.jpg";
import SALARY from "../../assets/salary.jpg";
import OTHER from "../../assets/other.jpg";

function IncomesCategories() {
    const groupCategories = [
  {
    id: 1,
    value: 'salary-and-pension',
            label: "Salary & Pension",
            icon: <FontAwesomeIcon icon={faCreditCard} />,
    background: SALARY,
  },
  {
    id: 2,
    value: 'interest-and-income',
    label: "Interest Income",
      icon: <FontAwesomeIcon icon={faPercent} />,
    background: INTEREST,
  },
  {
    id: 3,
    value: 'rental-and-sale-income',
    label: "Rental & Sale Income",
      icon: <FontAwesomeIcon icon={faPiggyBank} />,
    background: RENT,
  },
  {
    id: 4,
    value: 'other-incomes',
    label: "Other Incomes",
      icon: <FontAwesomeIcon icon={faGift} />,
    background: OTHER,
  }
];
    const [formActive, setFormActive] = useState(false);

    const chargesCategories = useSelector(selectIncomesCategories);

    return (
            <section className='charges-section section'>
                <AddButton onClick={() => setFormActive(true)}>Add more incomes categories</AddButton>
                <div>
                <CategoryBlock>
                    {groupCategories.map((group) => (
            <CategoryCard {...group} key={group.id}></CategoryCard>
          ))}
                </CategoryBlock>
            </div>
                <AddCategoryForm active={formActive} setActive={setFormActive} title={"incomesCategories"} groupCategories={groupCategories}/>
            </section>
    )
}

export default IncomesCategories;