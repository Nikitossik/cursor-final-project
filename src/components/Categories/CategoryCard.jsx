import { CategoryCardWrapper} from '../styles';
import CategoryItem from './CategoryItem';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faEdit,
//     faTrashAlt,
// } from "@fortawesome/free-solid-svg-icons";
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { deleteChargesCategories } from '../../redux/chargesCategoriesSlice';
// import { deleteIncomesCategories } from '../../redux/incomesCategoriesSlice';

const CategoryCard = ({ title, value, label, background, categories }) => {

    // const dispatch = useDispatch();
    let categoryList = [];
    categoryList = categories.filter(category => {
        return (category.groupCategory === value)
    });

    // const handleInput = e => {
    //     setCategoryLabel(e.target.value);
    //     console.log(e.target.value)
    // }


    // const handleClick = e => {
    //     const id = e.target.value;
    //     e.preventDefault();
    //     if (title === 'incomes'){
    //         dispatch(deleteIncomesCategories({
    //         id
    //         }));
    //     }
    //     else if (title === 'charges') {
    //         dispatch(deleteChargesCategories({
    //           id
    //         }));
    //     }
    // }

    return (
        <CategoryCardWrapper>
            <img src={background} alt="img21"/>
            <div className="card-content">
                <h3>{label}</h3>
                <ul>
                    {categoryList.map(category => (
                        <CategoryItem {...category} className="category-item" key={category.id} title={title}/>))}
                            {/* <li>
                <input placeholder={category.label} onInput={handleInput} type="text" name='category-name'/>
                            <button 
                                value={category.id} 
                                onClick={handleClick}
                            >
                                <FontAwesomeIcon className="icon-trash" icon={faTrashAlt} />
                            </button>
                            <button 
                                value={category.id} 
                                // onClick={handleEditClick}
                            >
                                <FontAwesomeIcon className="icon-trash" icon={faEdit} />
                            </button>
                            </li> */}
                        {/* ))} */}
                 </ul>
            </div>           
        </CategoryCardWrapper>
    );
};

export default CategoryCard;