import {AddFormWrapper, StyledAddForm, FormGroup, FormLabel, FormInput, FormTitle, FormSelect, FormButton} from '../styles';
import { useState, useEffect } from 'react';
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
    const [description, setDescription] = useState('');
    const [groupCategory, setGroupCategory] = useState('');

    const handleInput = e => {
        const {name, value} = e.target;

        switch (name) {
            case 'category-name':
                setCategoryLabel(value);
                break;
            case 'description':
                setDescription(value);
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        setCategoryValue(formatCategoryValue(categoryLabel));
    }, [categoryLabel]);

    useEffect(() => {   
        setCategoryIcon(getCategoryIcon(groupCategories, groupCategory));
    }, [groupCategory]);

    const handleSelectChange = e => {
        const {value} = e;
        setGroupCategory(value);
    }

    const handleClick = e => {
        e.preventDefault();
        if (title === 'incomesCategories'){
            dispatch(addIncomesCategories({
                label: categoryLabel,
                value: categoryValue,
                icon: categoryIcon,
                description,
                groupCategory,
            }));
        }
        else if (title === 'chargesCategories'){
            dispatch(addChargesCategories({
                label: categoryLabel,
                value: categoryValue,
                icon: categoryIcon,
                description, 
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
        const group = groups.find(group => group.value === value);
        return group ? group.icon : faQuestionCircle;
    }

    return (
        <AddFormWrapper className={active ? "active": "inactive"} onClick={closeForm}>
            <StyledAddForm onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={closeForm}>X</button>
                <FormTitle>Add new category</FormTitle>
            <FormGroup className='fullwidth'>
                <FormLabel htmlFor='category-name' className="input-group__label"> Name</FormLabel>
                <FormInput onInput={handleInput} name='category-name' id='category-name' type="text" className='form-input'/>
            </FormGroup>
            <FormGroup className='fullwidth'>
                <FormLabel htmlFor='description' className="input-group__label">Description</FormLabel>
                <FormInput onInput={handleInput} name='description' id='description' type="text" className='form-input'/>
            </FormGroup>
            <FormGroup className='fullwidth'>
                <FormLabel htmlFor='group-category' className="input-group__label">Select category type</FormLabel>
                <FormSelect 
                    name='group-category'
                    isSearchable 
                    isClearable 
                    className='form-select' 
                    options={groupCategories}
                    onChange={handleSelectChange}
                    components={{ Option: IconOption }}
                />
            </FormGroup>
            <FormButton onClick={handleClick}>New category</FormButton>
        </StyledAddForm>
        </AddFormWrapper>
    );
}

export default AddCategoryForm;