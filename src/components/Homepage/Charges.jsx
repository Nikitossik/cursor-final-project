import React, { useState, useEffect} from "react";
import Table from './Table';
import { AddButton} from '../styles';
import AddForm from '../AddForm';
import MessageEmpty from "./MessageEmpty";
import SortForm from "./SortForm";
import FilterForm from "./FilterForm";

import {useSelector} from 'react-redux';
import { selectCharges } from '../../redux/chargesSlice';

function Charges() {
    const messageText = 'You don\'t have any charges yet';
    
    const renderData = useSelector(selectCharges);
    const [formActive, setFormActive] = useState(false);
    const [sortParams, setSortParams] = useState({});
    const [filterParams, setFilterParams] = useState({});

    return (
            <section className='charges-section section'>
                <AddButton onClick={() => setFormActive(true)}>Add more charges</AddButton>
                <SortForm saveSortParams={setSortParams}/>
                <FilterForm saveFilterParams={setFilterParams}/>
                {
                    renderData.length !== 0 ? 
                        <Table 
                            sortParams={sortParams}
                            filterParams={filterParams}
                            renderData={renderData}
                        /> 
                        : 
                        <MessageEmpty messageText={messageText}/>
                }
                <AddForm 
                    active={formActive} 
                    setActive={setFormActive} 
                    title="charge" 
                    setSortParams={setSortParams}
                    setFilterParams={setFilterParams}
                />
            </section>
    )
}

export default Charges;