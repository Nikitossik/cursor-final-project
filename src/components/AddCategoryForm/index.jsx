import { AddFormWrapper, StyledAddForm, InputGroup, Button } from '../styles';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addIncomesCategories} from '../../redux/incomesCategoriesSlice';
import {addChargesCategories} from '../../redux/chargesCategoriesSlice';

import Select, {components} from 'react-select';

const {Option} = components;

const IconOption = (props) => {
    return (
        <Option {...props}>
            <span className='option-icon'>{props.data.icon}</span>
            {props.label}
      </Option>
    );
}

function AddCategoryForm({ active, setActive, title, groupCategories }) {
    const dispatch = useDispatch();
    const [categoryLabel, setCategoryLabel] = useState('');
    const [description, setDescription] = useState('');
    const [groupCategory, setGroupCategory] = useState('');

    const handleInput = e => {
        const eventObj = e.target ? e.target : e;
        const {name, value} = eventObj;

        switch (name) {
            case 'category-name':
                setCategoryLabel(value);
                break;
            // case 'description':
            //     setDescription(value);
            //     break;
            case 'group-category':
                setGroupCategory(value);
                break;
            default:
                break;
        }
    }

    const handleClick = e => {
        e.preventDefault();
        if (title === 'incomesCategories'){
            dispatch(addIncomesCategories({
                label: categoryLabel,
                // description,
                groupCategory,
            }));
        }
        else if (title === 'chargesCategories'){
            dispatch(addChargesCategories({
                label: categoryLabel,
               // description,
                groupCategory
            }));
        }
    }

    const closeForm = e =>{
        setActive(false);
        e.preventDefault();
    }

    return (
        <AddFormWrapper className={active ? "active": "inactive"} onClick={closeForm}>
            <StyledAddForm onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={closeForm}>X</button>
                <h1>Add new category</h1>
            <InputGroup>
                <label htmlFor='category-name' className="input-group__label"> Name</label>
                <input onInput={handleInput} name='category-name' id='category-name' type="text" className='form-input'/>
            </InputGroup>
            {/* <InputGroup>
                <label htmlFor='description' className="input-group__label">Description</label>
                <input onInput={handleInput} name='description' id='description' type="text" className='form-input'/>
            </InputGroup> */}
            <InputGroup>
                <label htmlFor='group-category' className="input-group__label">Select category type</label>
                <Select 
                    name='group-category'
                    isSearchable 
                    isClearable 
                    className='form-select' 
                    options={groupCategories}
                    onChange={handleInput}
                    components={{ Option: IconOption }}
                />
            </InputGroup>
            <Button onClick={handleClick}>Add new category</Button>
        </StyledAddForm>
        </AddFormWrapper>
    );
}

export default AddCategoryForm;