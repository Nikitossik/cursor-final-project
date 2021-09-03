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
        if (title === 'incomes'){
        dispatch(deleteIncome({
            id: id,
        }));
    }
        else if (title === 'charges') {
            dispatch(deleteCharge({
                id: id,
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
                {/* <span><FontAwesomeIcon id={id} icon={faEdit} onClick={handleClick}/></span> */}
                <button value={id} onClick={handleClick}>delete</button>
        {/* <button  onClick={handleClick} value={id} ><FontAwesomeIcon className="icon-trash" icon={faTrashAlt}/></button> */}
            </td>
        </tr>
    );
};

export default TableRow;
