import { useState} from "react";
import Table from './Table';
import { AddButton, SectionHeader} from '../styles';
import AddForm from './AddForm';
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
                <SectionHeader>
                    <div className='forms-block'>
                        <FilterForm title='charge' saveFilterParams={setFilterParams}/>
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
                            title="charge"
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