import React, { useState, useEffect} from "react";
import Table from './Table';
import { AddButton} from '../styles';
import AddForm from '../AddForm';
import MessageEmpty from "./MessageEmpty";
import SortForm from "./SortForm";
import FilterForm from "./FilterForm";

function Charges({getBalance}) {
    const messageText = 'You don\'t have any charges yet';
    
    const [renderData, setRenderData] = useState([]);
    const [formActive, setFormActive] = useState(false);
    const [sortParams, setSortParams] = useState({});
    const [filterParams, setFilterParams] = useState({});

    const getChargesFromLocalStorage = e => {
        const reduxState = JSON.parse(localStorage.getItem('reduxState'));
        const localCharges = reduxState ? reduxState.charges : [];
        setRenderData(localCharges);
        setSortParams({});
        setFilterParams({});
    }

    useEffect(() => {
        getChargesFromLocalStorage()
    },[]);

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
                    parentHandler={getChargesFromLocalStorage}
                    getBalance={getBalance}
                />
            </section>
    )
}

export default Charges;