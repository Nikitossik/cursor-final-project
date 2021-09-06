import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEdit,
    faTrashAlt,
    faCheckCircle
} from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteChargesCategories, editChargesCategories } from '../../redux/chargesCategoriesSlice';
import { deleteIncomesCategories } from '../../redux/incomesCategoriesSlice';


const CategoryItem = ({ title, label, id}) => {

    const dispatch = useDispatch();
    const [categoryLabel, setCategoryLabel] = useState(label);

    const handleInput = e => {
        setCategoryLabel(e.target.value);
        console.log(e.target.value)
    }

    const handleClick = e => {
        const id = e.target.value;
        e.preventDefault();
        if (title === 'incomes'){
            dispatch(deleteIncomesCategories({
            id
            }));
        }
        else if (title === 'charges') {
            dispatch(deleteChargesCategories({
              id
            }));
        }
    }

    const handleCheckClick = e => {
        const id = e.target.value;
        e.preventDefault();
        dispatch(editChargesCategories({
            id: id,
            label: categoryLabel,
            }));
    }

    return (
        <li>
            <input placeholder={categoryLabel} onInput={handleInput} type="text" name='category-name'/>
            <button value={id} onClick={handleClick}><FontAwesomeIcon className="icon-trash" icon={faTrashAlt} /></button>
            <button value={id} onClick={handleClick}><FontAwesomeIcon className="icon-trash" icon={faEdit} /></button>
            <button value={id} onClick={handleCheckClick}><FontAwesomeIcon className="icon-trash" icon={faCheckCircle} /></button>
            </li>
    );
};

export default CategoryItem;