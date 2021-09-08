import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEdit,
    faTrashAlt,
    faCheckCircle
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from 'react-redux';
import { useState} from 'react';
import { deleteCharge, editCharge } from '../../redux/chargesSlice';
import { deleteIncome, editIncome } from '../../redux/incomesSlice';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import CategoriesSelect from './CategoriesSelect';

const TableRow = ({ category, description, date, money, title, id }) => {
    const dispatch = useDispatch();
    const [disabled, setDisabled] = useState(true);
    const [descriptionValue, setDescription] = useState(description);
    // const [categoryValue, setCategoryValue] = useState('category');
    const [moneyValue, setMoney] = useState(money);
    const [dateValue, setDate] = useState(date);

    const handleInput = e => {
        const {name, value} = e.target;
        switch (name) {
            case 'description':
                setDescription(value);
                break;
            case 'money':
                setMoney(value);
                break;
            default:
                break;
        }
    }

    const handleEditClick = e => {
        setDisabled(false);
    };

    const handleDateChange = date => {
       setDate(moment(date).format('dd/MM/yyyy'));
    }

    // const handleSelectChange = e => {
    //     setCategoryValue(e.value);
    // }

    const handleClick = e => {
        const id = e.target.value;
        e.preventDefault();
        if (title === 'income'){
            dispatch(deleteIncome({
                id
            }));
        }
        else if (title === 'charge') {
            dispatch(deleteCharge({
                id
            }));
        }
    }

        const handleCheckClick = e => {
            const id = e.target.value;
        e.preventDefault();
        if (title === 'income'){
            dispatch(editIncome({
                id: id,
                money: moneyValue,
                description: descriptionValue,
                date: dateValue,
        }));
        }
        else if (title === 'charge') {
            dispatch(editCharge({
                id: id,
                money: moneyValue,
                description: descriptionValue,
                date: dateValue,
        }));
        }
        setDisabled(true);
    }

    return (
        <tr>
            <td><input  value={category} onInput={handleInput} type="text" name='category-name' disabled={disabled} /></td>
            {/* <td><CategoriesSelect placeholder={categoryValue}title={title} handler={handleSelectChange} disabled = {disabled}/></td> */}
            <td><input value={descriptionValue} onInput={handleInput} type="text" name='description' disabled = {disabled}/></td>
            <td><DatePicker 
                    onChange={handleDateChange} 
                    name='date' 
                    id='date'
                disabled = {disabled}
                dateFormat='dd/MM/yyyy'
                value={dateValue}
                /></td>
            <td><input value={moneyValue} onInput={handleInput} type="number" name='money' disabled = {disabled}/></td>
            <td>
                <button 
                    onClick={handleClick} 
                    value={id}
                    className='close'
                >
                    <FontAwesomeIcon className="icon-trash" icon={faTrashAlt}/>
                </button>
                <button 
                    onClick={handleEditClick} 
                    value={id}
                    className='close'
                >
                    <FontAwesomeIcon className="icon-trash" icon={faEdit}/>
                </button>
                <button 
                    onClick={handleCheckClick} 
                    value={id}
                    className='close'
                >
                    <FontAwesomeIcon className="icon-trash" icon={faCheckCircle}/>
                </button>
            </td>
        </tr>
    );
};

export default TableRow;
