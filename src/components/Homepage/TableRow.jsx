import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUtensils,
    faEdit,
    faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

const TableRow = ({ category, description, date, money }) => {
    
    const handleClick = e => {
        console.log(e.target.id);
    }

    return (
        <tr>
            <td>{category}</td>
            <td>{description}</td>
            <td>{date}</td>
            <td>{money}</td>
            <td>
                    <span><FontAwesomeIcon id={category} icon={faEdit} onClick={handleClick}/></span>
                    <span><FontAwesomeIcon id={category} icon={faTrashAlt} onClick={handleClick}/></span>
            </td>
        </tr>
    );
};

export default TableRow;
