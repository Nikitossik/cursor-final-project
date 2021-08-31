import React, { useState, useEffect } from "react";
import { AddButton, CategoryBlock } from '../styles';
import AddCategoryForm from '../AddCategoryForm';
import CategoryCard from './CategoryCard';
import { useSelector } from 'react-redux';
import { selectChargesCategories } from '../../redux/chargesCategoriesSlice';
import { charges_groups } from "./groupCategories";

function ChargesCategories() {

  const [formActive, setFormActive] = useState(false);

  const categories= useSelector(selectChargesCategories);

  return (
    <section className='charges-section section'>
      <AddButton onClick={() => setFormActive(true)}>Add more charges categories</AddButton>
      <div>
        <CategoryBlock>
          {
            charges_groups.map(
              group => <CategoryCard {...group} key={group.id} categories={categories}/>
            )
          }
        </CategoryBlock>
      </div>

      <AddCategoryForm
        active={formActive}
        setActive={setFormActive}
        groupCategories={charges_groups}
        title='chargesCategories'
      />
    </section>
  )
}

export default ChargesCategories;