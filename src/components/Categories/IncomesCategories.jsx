import React, { useState} from "react";
import { AddButton } from '../styles';
import AddCategoryForm from '../AddCategoryForm';
import { useSelector } from 'react-redux';
import { selectIncomesCategories } from '../../redux/incomesCategoriesSlice';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUtensils,
  faCar,
  faUserGraduate,
  faTshirt,
} from "@fortawesome/free-solid-svg-icons";

function IncomesCategories() {
    const groupCategories = [
  {
    id: 1,
    title: "Salary & Pension",
    icon: <FontAwesomeIcon icon={faUtensils}/>,
  },
  {
    id: 2,
    title: "Interest Income",
    icon: <FontAwesomeIcon icon={faTshirt}/>,
  },
  {
    id: 3,
    title: "Rental & Sale Income",
    icon: <FontAwesomeIcon icon={faUserGraduate}/>,
  },
  {
    id: 4,
    title: "Other Incomes",
    icon: <FontAwesomeIcon icon={faCar}/>,
  }
];
    const [formActive, setFormActive] = useState(false);

    const chargesCategories = useSelector(selectIncomesCategories);

    return (
            <section className='charges-section section'>
                <AddButton onClick={() => setFormActive(true)}>Add more incomes categories</AddButton>
                <AddCategoryForm active={formActive} setActive={setFormActive} title={"incomesCategories"} groupCategories={groupCategories}/>
            </section>
    )
}

export default IncomesCategories;