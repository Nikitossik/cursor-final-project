import React, { useState, useEffect} from "react";
import Table from './Table';
import { AddButton } from '../styles';
import AddForm from '../AddForm';
import MessageEmpty from "./MessageEmpty";
import SortForm from "./SortForm";


function Incomes({getBalance}) {
    const messageText = 'You don\'t have any incomes yet';

    const [renderData, setRenderData] = useState([]);
    const [formActive, setFormActive] = useState(false);
    const [sortParams, setSortParams] = useState({});

    const getIncomesFromLocalStorage = e => {
        const reduxState = JSON.parse(localStorage.getItem('reduxState'));
        const localIncomes= reduxState ? reduxState.incomes : [];
        setRenderData(localIncomes);
    }

    useEffect(() => {
        getIncomesFromLocalStorage()
    }, []);

    return (
        <section className='incomes-section section'>
           <AddButton onClick={() => setFormActive(true)}>Add more incomes</AddButton>
           <SortForm saveSortParams={setSortParams}/>
                {
                    renderData.length !== 0 ? 
                    <Table 
                        sortParams={sortParams}
                        renderData={renderData}
                    /> 
                    : 
                    <MessageEmpty messageText={messageText}/>
                }
            <AddForm 
                active={formActive} 
                setActive={setFormActive} 
                title="income"
                parentHandler={getIncomesFromLocalStorage}
                getBalance={getBalance}
            />
        </section>
    )
}

export default Incomes;