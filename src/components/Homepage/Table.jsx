import React from 'react';
import TableRow from "./TableRow";
import {TableWrapper, StyledTable}  from '../styles';

class Table extends React.Component {

    sortByText = (data, isReverse, option) => {
        const bigger = isReverse ? -1 : 1;
        const less = isReverse ? 1 : -1;
        data.sort((a, b) => {    
            const first = a[option].toLowerCase();
            const second = b[option].toLowerCase();
            return first > second ? bigger : first === second ? 0 : less;
        });
    }

    sortByMoney = (data, isReverse) => {
        const bigger = isReverse ? -1 : 1;
        const less = isReverse ? 1 : -1;
        data.sort((a, b) => {    
            const first = +a.money;
            const second = +b.money;
            return first > second ? bigger : first === second ? 0 : less;
        });
    }

    sortByDates = (data, isReverse) => {
        const bigger = isReverse ? -1 : 1;
        const less = isReverse ? 1 : -1;
        data.sort((a, b) => {    
            const first = Date.parse(a.date);
            const second = Date.parse(b.date);
            return first > second ? bigger : first === second ? 0 : less;
        });
    }

    sort = (data, sortOption, isReverse) => {
        if (sortOption === 'category' || sortOption === 'description') {
            this.sortByText(data, isReverse, sortOption);
        }
        else if (sortOption === 'money') {
            this.sortByMoney(data, isReverse);
        }
        else if (sortOption === 'date') {
            this.sortByDates(data, isReverse);
        }
    }

    render() {
        const {renderData} = this.props;
        const {sortOption, isReverse} = this.props.sortParams;

        let resultData = [...renderData];

        if (sortOption !== '') this.sort(resultData, sortOption, isReverse);

        const rows = resultData.map(row => <TableRow {...row} key={row.id} />);

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
                        {rows}
                    </tbody>
                </StyledTable>
            </TableWrapper>
        )
    };
}

export default Table;
