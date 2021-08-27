import React, { useState} from "react";
import Table from './Table';
import { AddButton } from '../styles';
import AddForm from '../AddForm';
import MessageEmpty from "./MessageEmpty";


function Incomes() {
    const messageText = 'You don\'t have any incomes yet';
    const reduxState = JSON.parse(localStorage.getItem('reduxState'));
    const localIncomes = reduxState ? reduxState.incomes : [];
    const [renderData, setRenderData] = useState(localIncomes);

    const getIncomesFromLocalStorage = e => {
        const reduxState = JSON.parse(localStorage.getItem('reduxState'));
        const localIncomes= reduxState ? reduxState.incomes : [];
        setRenderData(localIncomes);
    }

    const [formActive, setFormActive] = useState(false);

    return (
        <section className='incomes-section section'>
           <AddButton onClick={() => setFormActive(true)}>Add more incomes</AddButton>
                {
                    renderData.length !== 0 ? 
                        <Table data={renderData}/> 
                        : 
                        <MessageEmpty messageText={messageText}/>
                }
                <AddForm 
                    active={formActive} 
                    setActive={setFormActive} 
                    title="income"
                    parentHandler={getIncomesFromLocalStorage}
                />
        </section>
    )
}

export default Incomes;