import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEdit,
    faTrashAlt,
    faCheckCircle
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteCharge, editCharge } from '../../redux/chargesSlice';
import { deleteIncome, editIncome } from '../../redux/incomesSlice';

const TableRow = ({ category, description, date, money, title, id }) => {
    const dispatch = useDispatch();
    const [disabled, setDisabled] = useState(true);
    const [descriptionValue, setDescription] = useState(description);
    const [moneyValue, setMoney] = useState(money);

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
        }));
        }
        else if (title === 'charge') {
            dispatch(editCharge({
                id: id,
                money: moneyValue,
                description: descriptionValue,
        }));
        }
        setDisabled(true);
    }

    return (
        <tr>
            <td><input value={category} onInput={handleInput} type="text" name='category-name' disabled/></td>
            <td><input value={descriptionValue} onInput={handleInput} type="text" name='description' disabled = {disabled}/></td>
            <td><input value={date} onInput={handleInput} type="text" name='date' disabled/></td>
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
