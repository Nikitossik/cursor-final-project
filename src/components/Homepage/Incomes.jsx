import React, { useState, useEffect} from "react";
import Table from './Table';
import { AddButton } from '../styles';
import AddForm from './AddForm';
import MessageEmpty from "./MessageEmpty";
import SortForm from "./SortForm";
import FilterForm from "./FilterForm";

import {useSelector} from 'react-redux';
import { selectIncomes } from '../../redux/incomesSlice';

function Incomes() {
    const messageText = 'You don\'t have any incomes yet';

    const renderData= useSelector(selectIncomes);
    const [formActive, setFormActive] = useState(false);
    const [sortParams, setSortParams] = useState({});
    const [filterParams, setFilterParams] = useState({});

    return (
        <section className='incomes-section section'>
           <AddButton onClick={() => setFormActive(true)}>Add more incomes</AddButton>
           <SortForm saveSortParams={setSortParams}/>
           <FilterForm title='income' saveFilterParams={setFilterParams}/>
                {
                    renderData.length !== 0 ? 
                    <Table 
                        sortParams={sortParams}
                        filterParams={filterParams}
                        renderData={renderData}
                        title="incomes"
                    /> 
                    : 
                    <MessageEmpty messageText={messageText}/>
                }
            <AddForm 
                active={formActive} 
                setActive={setFormActive} 
                title="income"
                setSortParams={setSortParams}
                setFilterParams={setFilterParams}
            />
        </section>
    )
}

export default Incomes;