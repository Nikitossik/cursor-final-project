import React, { useState} from "react";
import { AddButton } from '../styles';
import AddCategoryForm from '../AddCategoryForm';
import { useSelector } from 'react-redux';
import { selectChargesCategories } from '../../redux/chargesCategoriesSlice';

function ChargesCategories() {
    const [formActive, setFormActive] = useState(false);

    const chargesCategories = useSelector(selectChargesCategories);

    return (
            <section className='charges-section section'>
                <AddButton onClick={() => setFormActive(true)}>Add more charges categories</AddButton>
                <AddCategoryForm active={formActive} setActive={setFormActive} title={"chargesCategories"}/>
            </section>
    )
}

export default ChargesCategories;