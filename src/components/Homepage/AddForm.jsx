import {AddFormWrapper, StyledAddForm, FormGroup, FormLabel, FormInput, FormTitle, FormButton} from '../styles';
import { useState, forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { addCharge} from '../../redux/chargesSlice';
import { addIncome} from '../../redux/incomesSlice';
import { calculate } from '../../redux/balanceSlice';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import moment from 'moment';

import CategoriesSelect from './CategoriesSelect';

function AddForm({active, setActive, title, setSortParams, setFilterParams}) {

    const DateInput = forwardRef(({ value, onClick }, ref) => (
        <FormInput className="example-custom-input" onClick={onClick} ref={ref} defaultValue={value}/>
    ));

    const dispatch = useDispatch();

    const [money, setMoney] = useState(0);
    const [description, setDescription] = useState('');
    const [categoryValue, setCategoryValue] = useState('');
    const [categoryLabel, setCategoryLabel] = useState('');
    const [renderDate, setRenderDate] = useState(new Date());
    const [date, setDate] = useState(moment().format('dd/MM/yyyy'));

    const handleInput = e => {
        const {name, value} = e.target;

        switch (name) {
            case 'total-sum':
                setMoney(+value);
                break;
            case 'description':
                setDescription(value);
                break;   
            default:
                break;
        }
    }

    const handleDateChange = date => {
        setRenderDate(date);
        setDate(moment(date).format('dd/MM/yyyy'));
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
                    <FormTitle>Add new {title}</FormTitle>   
            <FormGroup className='fullwidth'>
                <FormLabel htmlFor='total-sum'>Total</FormLabel>
                <FormInput onInput={handleInput} name='total-sum' id='total-sum' type="number" min='0'/>
            </FormGroup>
            <FormGroup className='fullwidth'>
                <FormLabel htmlFor='description'>Description</FormLabel>
                <FormInput onInput={handleInput} name='description' id='description' type="text"/>
            </FormGroup>
            <FormGroup className='fullwidth'>
                <FormLabel htmlFor='category'>Select category</FormLabel>
                <CategoriesSelect title={title} handler={handleSelectChange}/>
            </FormGroup>
            <FormGroup className='fullwidth'>
                <FormLabel htmlFor='date'>Select Date</FormLabel>
                <DatePicker 
                    onChange={handleDateChange} 
                    selected={renderDate}
                    name='date' 
                    id='date'
                    customInput={<DateInput/>}
                    dateFormat='dd/MM/yyyy'
                />
            </FormGroup>
            <FormButton onClick={handleClick}>New {title}</FormButton>
        </StyledAddForm>
        </AddFormWrapper>
    );
}

export default AddForm;