import React, { useState} from "react";
import { AddButton } from '../styles';
import AddCategoryForm from '../AddCategoryForm';
import { useSelector } from 'react-redux';
import { selectIncomesCategories } from '../../redux/incomesCategoriesSlice';

function IncomesCategories() {
    const [formActive, setFormActive] = useState(false);

    const chargesCategories = useSelector(selectIncomesCategories);

    return (
            <section className='charges-section section'>
                <AddButton onClick={() => setFormActive(true)}>Add more incomes categories</AddButton>
                <AddCategoryForm active={formActive} setActive={setFormActive} title={"incomesCategories"}/>
            </section>
    )
}

export default IncomesCategories;