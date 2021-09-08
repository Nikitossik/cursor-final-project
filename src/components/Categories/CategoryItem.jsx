import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEdit,
    faTrashAlt,
    faCheckCircle
} from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteChargesCategories, editChargesCategories } from '../../redux/chargesCategoriesSlice';
import { deleteIncomesCategories, editIncomesCategories } from '../../redux/incomesCategoriesSlice';


const CategoryItem = ({ title, label, id}) => {

    const dispatch = useDispatch();
    const [disabled, setDisabled] = useState(true);
    const [categoryLabel, setCategoryLabel] = useState(label);

    const handleInput = e => {
        setCategoryLabel(e.target.value);
        console.log(e.target.value)
    }

    const handleEditClick = e => {
        console.log(e.target);
        setDisabled(false);
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
        if (title === 'incomes'){
            dispatch(editIncomesCategories({
            id: id,
            label: categoryLabel,
        }));
        }
        else if (title === 'charges') {
            dispatch(editChargesCategories({
            id: id,
            label: categoryLabel,
        }));
        }
        setDisabled(true);
    }

    return (
        <li>
            <input value={categoryLabel} onInput={handleInput} type="text" name='category-name' disabled = {disabled}/>
            <button value={id} onClick={handleClick}><FontAwesomeIcon className="icon-trash" icon={faTrashAlt} /></button>
            <button value={id} onClick={handleEditClick}><FontAwesomeIcon className="icon-trash" icon={faEdit} /></button>
            <button value={id} onClick={handleCheckClick}><FontAwesomeIcon className="icon-trash" icon={faCheckCircle} /></button>
            </li>
    );
};

export default CategoryItem;