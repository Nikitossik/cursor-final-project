import {AddFormWrapper, StyledAddForm, InputGroup, Button} from '../styles';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCharge} from '../../redux/chargesSlice';
import { addIncome} from '../../redux/incomesSlice';
import { calculate } from '../../redux/balanceSlice'

import Select, {components} from 'react-select';

import { selectChargesCategories } from '../../redux/chargesCategoriesSlice';
import { selectIncomesCategories } from '../../redux/incomesCategoriesSlice';

function AddForm({active, setActive, title, setSortParams, setFilterParams}) {

    const dispatch = useDispatch();

    const chargesCategories = useSelector(selectChargesCategories);
    const incomesCategories = useSelector(selectIncomesCategories);

    const [money, setMoney] = useState(0);
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');

    const handleInput = e => {
        const {name, value} = e.target;

        switch (name) {
            case 'total-sum':
                setMoney(+value);
                break;
            case 'description':
                setDescription(value);
                break;
            case 'category':
                setCategory(value);
                break;
            case 'date':
                setDate(value);
                break;       
            default:
                break;
        }
    }

    const handleClick = e => {
        e.preventDefault();
        if (title === 'income'){
            dispatch(addIncome({
                money, 
                description,
                category,
                date
            }));
            dispatch(calculate(+money));
            setSortParams({});
            setFilterParams({});
        }
        else if (title === 'charge'){
            dispatch(addCharge({
                money, 
                description,
                category,
                date
            }));
            dispatch(calculate(-money));
            setSortParams({});
            setFilterParams({});
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
                    <h1>Add new {title}</h1>   
            <InputGroup>
                <label htmlFor='total-sum' className="input-group__label">Total</label>
                <input onInput={handleInput} name='total-sum' id='total-sum' type="number" min='0' className='form-input'/>
            </InputGroup>
            <InputGroup>
                <label htmlFor='description' className="input-group__label">Description</label>
                <input onInput={handleInput} name='description' id='description' type="text" className='form-input'/>
            </InputGroup>
            <InputGroup>
                <label htmlFor='category' className="input-group__label">Select category</label>
                <select onChange={handleInput} name='category' id='category' className='form-select'>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 4">Option 4</option>
                    <option value="Option 5">Option 5</option>
                    <option value="Option length">Option that has too long of a value to fit</option>
                </select>
                <Select 
                    name='category'
                    id="category"
                    isSearchable 
                    isClearable 
                    className='form-select' 
                    onChange={handleInput}
                />
            </InputGroup>
            <InputGroup>
                <label htmlFor='date' className="input-group__label">Select Date</label>
                <input onInput={handleInput} name='date' id='date' type="date" className='form-input'/>
            </InputGroup>
            <Button onClick={handleClick}>Add new {title}</Button>
        </StyledAddForm>
        </AddFormWrapper>
    );
}

export default AddForm;