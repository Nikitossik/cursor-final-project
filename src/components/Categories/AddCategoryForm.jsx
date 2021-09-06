import { AddFormWrapper, StyledAddForm, InputGroup, Button } from '../styles';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addIncomesCategories} from '../../redux/incomesCategoriesSlice';
import {addChargesCategories} from '../../redux/chargesCategoriesSlice';
import {
    faQuestionCircle
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import Select, {components} from 'react-select';

const {Option} = components;

const IconOption = (props) => {
    return (
        <Option {...props}>
            <span className='option-icon'>
                <FontAwesomeIcon icon={props.data.icon}/>
            </span>
            {props.label}
      </Option>
    );
}

function AddCategoryForm({ active, setActive, title, groupCategories }) {
    const dispatch = useDispatch();
    const [categoryLabel, setCategoryLabel] = useState('');
    const [categoryValue, setCategoryValue] = useState('');
    const [categoryIcon, setCategoryIcon] = useState(faQuestionCircle);
    const [groupCategory, setGroupCategory] = useState('');

    const handleInput = e => {
        const {name, value} = e.target;

        switch (name) {
            case 'category-name':
                setCategoryLabel(value);
                break;
            
            default:
                break;
        }
    }

    const handleSelectChange = e => {
        const {value} = e;
        setGroupCategory(value);
        setCategoryValue(formatCategoryValue(categoryLabel));
        setCategoryIcon(getCategoryIcon(groupCategories, categoryValue));
    }

    const handleClick = e => {
        e.preventDefault();
        if (title === 'incomesCategories'){
            dispatch(addIncomesCategories({
                label: categoryLabel,
                value: categoryValue,
                icon: categoryIcon,
                groupCategory,
            }));
        }
        else if (title === 'chargesCategories'){
            dispatch(addChargesCategories({
                label: categoryLabel,
                value: categoryValue,
                icon: categoryIcon,
                groupCategory
            }));
        }
    }

    const closeForm = e =>{
        setActive(false);
        e.preventDefault();
    }

    const formatCategoryValue = str => str ? str.toLowerCase().match(/([\wа-яА-Я]+)/gi).join('-') : str;
    
    const getCategoryIcon = (groups, value) => {
        const category = groups.find(item => item.value === value)
        return category ? category.icon : faQuestionCircle;
    }

    console.log(faQuestionCircle);

    return (
        <AddFormWrapper className={active ? "active": "inactive"} onClick={closeForm}>
            <StyledAddForm onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={closeForm}>X</button>
                <h1>Add new category</h1>
            <InputGroup>
                <label htmlFor='category-name' className="input-group__label"> Name</label>
                <input onInput={handleInput} name='category-name' id='category-name' type="text" className='form-input'/>
            </InputGroup>
            <InputGroup>
                <label htmlFor='group-category' className="input-group__label">Select category type</label>
                <Select 
                    name='group-category'
                    isSearchable 
                    isClearable 
                    className='form-select' 
                    options={groupCategories}
                    onChange={handleSelectChange}
                    components={{ Option: IconOption }}
                />
            </InputGroup>
            <Button onClick={handleClick}>Add new category</Button>
        </StyledAddForm>
        </AddFormWrapper>
    );
}

export default AddCategoryForm;