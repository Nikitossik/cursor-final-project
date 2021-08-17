import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUtensils,
    faEdit,
    faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import TableRow from "./TableRow";
import {TableWrapper, StyledTable}  from '../styles';

const Table = ({charges}) => {
    return (
        <TableWrapper>
            <StyledTable>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Money</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <FontAwesomeIcon icon={faUtensils} />
                            Food
                        </td>
                        <td>Dinner with John</td>
                        <td>17/08/2021</td>
                        <td>$ 13.00</td>
                        <td>
                            <button>
                                <FontAwesomeIcon icon={faEdit} />
                            </button>
                            <button>
                                <FontAwesomeIcon icon={faTrashAlt} />
                            </button>
                        </td>
                    </tr>
                    {charges.map((charge) => (
                        <TableRow {...charge} key={charge.id} />
                    ))}
                </tbody>
            </StyledTable>
        </TableWrapper>
    );
};

export default Table;
