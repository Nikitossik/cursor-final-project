import TableRow from "./TableRow";
import {TableWrapper, StyledTable}  from '../styles';

const Table = ({rows}) => {

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
                    {rows.map((row) => (
                        <TableRow {...row} key={row.id} />
                    ))}
                </tbody>
            </StyledTable>
        </TableWrapper>
    );
};

export default Table;
