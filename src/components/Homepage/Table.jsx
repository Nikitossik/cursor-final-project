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
                    {charges.map((charge) => (
                        <TableRow {...charge} key={charge.id} />
                    ))}
                </tbody>
            </StyledTable>
        </TableWrapper>
    );
};

export default Table;
