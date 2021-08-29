import { AddFormWrapper, StyledAddForm, InputGroup, Button } from '../styles';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add as addIncomesCategories } from '../../redux/incomesCategoriesSlice';
import { add as addChargesCategories } from '../../redux/chargesCategoriesSlice';

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
    const [categoryName, setCategoryName] = useState('');
    const [description, setDescription] = useState('');
    const [groupCategory, setGroupCategory] = useState('');

    const handleInput = e => {
        const {name, value} = e.target;

        switch (name) {
            case 'category-name':
                setCategoryName(value);
                break;
            case 'description':
                setDescription(value);
                break;
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
                categoryName,
                description,
                groupCategory,
            }));
        }
        else if (title === 'chargeCategories'){
            dispatch(addChargesCategories({
                categoryName,
                description,
                groupCategory
            }));
        }
    }

    return (
        <AddFormWrapper className={active ? "active": "inactive"} onClick={() => setActive(false)}>
            <StyledAddForm onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={() => setActive(false)}>X</button>
                <h1>Add new category</h1>
            <InputGroup>
                <label htmlFor='category-name' className="input-group__label"> Name</label>
                <input onInput={handleInput} name='category-name' id='category-name' type="text" className='form-input'/>
            </InputGroup>
            <InputGroup>
                <label htmlFor='description' className="input-group__label">Description</label>
                <input onInput={handleInput} name='description' id='description' type="text" className='form-input'/>
            </InputGroup>
            <InputGroup>
                <label htmlFor='group-category' className="input-group__label">Select category type</label>
                    {/* <select onInput={handleInput} name='group-category' id='group-category' className='form-select'>
                         {
                         groupCategories.map((group) => (
                        <option {...group} key={group.id}>
                            {group.icon}
                            {group.title}
                        </option>
                    ))}
                </select> */}
                <Select 
                    isSearchable 
                    isClearable 
                    className='form-select' 
                    options={groupCategories}
                    components={{ Option: IconOption }}
                />
            </InputGroup>
            <Button onClick={handleClick}>Add new category</Button>
        </StyledAddForm>
        </AddFormWrapper>
    );
}

export default AddCategoryForm;