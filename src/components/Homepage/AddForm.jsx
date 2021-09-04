import {AddFormWrapper, StyledAddForm, InputGroup, Button} from '../styles';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCharge} from '../../redux/chargesSlice';
import { addIncome} from '../../redux/incomesSlice';
import { calculate } from '../../redux/balanceSlice';

import CategoriesSelect from './CategoriesSelect';

function AddForm({active, setActive, title, setSortParams, setFilterParams}) {

    const dispatch = useDispatch();

    const [money, setMoney] = useState(0);
    const [description, setDescription] = useState('');
    const [categoryValue, setCategoryValue] = useState('');
    const [categoryLabel, setCategoryLabel] = useState('');
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
            case 'date':
                setDate(value);
                break;       
            default:
                break;
        }
    }

    const handleSelectChange = e => {
        setCategoryLabel(e.label);
        setCategoryValue(e.value);
    }

    const handleClick = e => {
        e.preventDefault();
        if (title === 'income'){
            dispatch(addIncome({
                money, 
                description,
                category: categoryLabel,
                categoryValue,
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
                category: categoryLabel,
                categoryValue,
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
                <CategoriesSelect title={title} handler={handleSelectChange}/>
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