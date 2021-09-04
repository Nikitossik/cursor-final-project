import React from 'react';
import TableRow from "./TableRow";
import {StyledTable}  from '../styles';
import MessageEmpty from './MessageEmpty';

import moment from 'moment';

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
            return moment(a.date).isAfter(b.date) ? 
                bigger : moment(a.date).isSame(b.date) ? 0 : less;
        });
    }

    sort = (params, data) => {
        const {sortOption, isReverse} = params;
        switch(sortOption){
            case 'category':
                this.sortByText(data, isReverse, sortOption);
                break;
            case 'description':
                this.sortByText(data, isReverse, sortOption);
                break;
            case 'money':
                this.sortByMoney(data, isReverse);
                break;
            case 'date':
                this.sortByDates(data, isReverse);
                break;
            default: 
                break;
        }
    }

    filterByText = (data, text) => {
        return data.filter(item => {
            const regExp = new RegExp(text, 'gi');
            return regExp.test(item.description);
        });
    }

    filterByCategory = (data, category) => {
        return data.filter(item => {
            return category === item.categoryValue
        });
    }

    filterByDateOption = (data, filterDateOption, startDate, endDate) => {
        switch(filterDateOption){
            case 'all-time': 
                return data;
            case 'month': 
                return data.filter(item => {
                    return moment(item.date).month() === moment().month();
                });
            case 'week': 
                return data.filter(item => {
                    return moment(item.date).isoWeek() === moment().isoWeek();
                });
            case 'day': 
                return data.filter(item => {
                    return moment().isSame(item.date);
                });
            case 'period': 
                return data.filter(item => {
                    return moment(item.date).isSameOrAfter(startDate) && 
                    moment(item.date).isSameOrBefore(endDate);
                });
            default: break;
        }
    }

    filter = (params, data) => {
        const {filterText, filterDateOption, filterCategory, startDate, endDate} = params;
        let resultData = this.filterByText(data, filterText);
        resultData = this.filterByCategory(resultData, filterCategory);
        resultData = this.filterByDateOption(resultData, filterDateOption, startDate, endDate);
        return resultData;
    }

    render() {
        const {renderData, sortParams, filterParams, title} = this.props;
        const message = 'Nothing found';

        let resultData = [...renderData];

        if (Object.values(sortParams).length !== 0) 
            this.sort(sortParams, resultData);

        if (Object.values(filterParams).length !== 0) 
            resultData = this.filter(filterParams, resultData);

        const rows = resultData.map(row => <TableRow {...row} key={row.id} title={title}/>);

        const resultTable = (
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
        );

        return (
            <>
                {
                resultData.length !== 0 ? 
                    resultTable
                    : 
                    <MessageEmpty messageText={message}/>
                }
            </>
           
        )
    };
}

export default Table;
