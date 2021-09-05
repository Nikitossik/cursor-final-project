import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEdit,
    faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from 'react-redux';
import { deleteCharge } from '../../redux/chargesSlice';
import { deleteIncome } from '../../redux/incomesSlice';

const TableRow = ({ category, description, date, money, title, id }) => {
    const dispatch = useDispatch();

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

    return (
        <tr>
            <td>{category}</td>
            <td>{description}</td>
            <td>{date}</td>
            <td>{money}</td>
            <td>
                <button 
                    onClick={handleClick} 
                    value={id}
                    className='close'
                >
                    <FontAwesomeIcon className="icon-trash" icon={faTrashAlt}/>
                </button>
            </td>
        </tr>
    );
};

export default TableRow;
