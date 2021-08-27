import React, { useState} from "react";
import Table from './Table';
import { AddButton } from '../styles';
import AddForm from '../AddForm';
import MessageEmpty from "./MessageEmpty";


function Charges() {
    const messageText = 'You don\'t have any charges yet';
    const reduxState = JSON.parse(localStorage.getItem('reduxState'));
    const localCharges = reduxState ? reduxState.charges : [];
    const [renderData, setRenderData] = useState(localCharges);

    const getChargesFromLocalStorage = e => {
        const reduxState = JSON.parse(localStorage.getItem('reduxState'));
        const localCharges = reduxState ? reduxState.charges : [];
        setRenderData(localCharges);
    }

    const [formActive, setFormActive] = useState(false);

    return (
            <section className='charges-section section'>
                <AddButton onClick={() => setFormActive(true)}>Add more charges</AddButton>
                {
                    renderData.length !== 0 ? 
                        <Table data={renderData}/> 
                        : 
                        <MessageEmpty messageText={messageText}/>
                }
                <AddForm 
                    active={formActive} 
                    setActive={setFormActive} 
                    title="charge" 
                    parentHandler={getChargesFromLocalStorage}
                />
            </section>
    )
}

export default Charges;