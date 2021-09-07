import React, { useState} from "react";
import { AddButton, CategoryBlock} from '../styles';
import AddCategoryForm from './AddCategoryForm';
import CategoryCard from './CategoryCard';
import { useSelector } from 'react-redux';
import { selectIncomesCategories } from '../../redux/incomesCategoriesSlice';

import { incomes_groups } from '../groupCategories';

function IncomesCategories() {
  
    const [formActive, setFormActive] = useState(false);
    
    const categories= useSelector(selectIncomesCategories);

    return (
            <section className='charges-section section'>
                <AddButton onClick={() => setFormActive(true)}>Add more</AddButton>
                <div>
                <CategoryBlock>
                    {
                        incomes_groups.map(
                            group => <CategoryCard {...group} key={group.id} categories={categories} title={"incomes"}/>
                        )
                    }
                </CategoryBlock>
            </div>
                <AddCategoryForm 
                  active={formActive} 
                  setActive={setFormActive} 
                  groupCategories={incomes_groups}
                  title="incomesCategories"
                />
            </section>
    )
}

export default IncomesCategories;