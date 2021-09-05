import { useState} from "react";
import Table from './Table';
import { AddButton, SectionHeader } from '../styles';
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
            <SectionHeader>
                <div className='forms-block'>
                    <FilterForm title='income' saveFilterParams={setFilterParams}/>
                    <SortForm saveSortParams={setSortParams}/>
                </div>
                <div className='button-block'>
                    <AddButton onClick={() => setFormActive(true)}>Add more</AddButton>
                </div>
            </SectionHeader>
            {
                renderData.length !== 0 ? 
                <Table 
                    sortParams={sortParams}
                    filterParams={filterParams}
                    renderData={renderData}
                    title="income"
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