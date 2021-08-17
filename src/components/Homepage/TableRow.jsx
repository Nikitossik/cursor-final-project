import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUtensils,
    faEdit,
    faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

const TableRow = ({category, description, date, money}) => {
    return (
        <tr>
            <td>{category}</td>
            <td>{description}</td>
            <td>{date}</td>
            <td>{money}</td>
            <td>
                <button>
                    <FontAwesomeIcon icon={faEdit} />
                </button>
                <button>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
            </td>
        </tr>
    );
};

export default TableRow;
