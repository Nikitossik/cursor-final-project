import { AddFormWrapper, StyledAddForm, InputGroup, Button } from '../styles';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add as addIncomesCategories } from '../../redux/incomesCategoriesSlice';
import { add as addChargesCategories} from '../../redux/chargesCategoriesSlice';

function AddCategoryForm({active, setActive, title}) {

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
                <label htmlFor='category-name' className="input-group__label">Name</label>
                <input onInput={handleInput} name='category-name' id='category-name' type="text" className='form-input'/>
            </InputGroup>
            <InputGroup>
                <label htmlFor='description' className="input-group__label">Description</label>
                <input onInput={handleInput} name='description' id='description' type="text" className='form-input'/>
            </InputGroup>
            <InputGroup>
                <label htmlFor='group-category' className="input-group__label">Select category type</label>
                <select onInput={handleInput} name='group-category' id='group-category' className='form-select'>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 4">Option 4</option>
                    <option value="Option 5">Option 5</option>
                    <option value="Option length">Option that has too long of a value to fit</option>
                </select>
            </InputGroup>
            <Button onClick={handleClick}>Add new category</Button>
        </StyledAddForm>
        </AddFormWrapper>
    );
}

export default AddCategoryForm;