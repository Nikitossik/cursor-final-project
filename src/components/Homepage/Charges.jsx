import React, { useState} from "react";
import charges from '../data';
import Table from './Table';
import {AddButton} from '../styles';
import AddForm from '../AddForm'

function Charges() {
    const [formActive, setFormActive] = useState(false);
    return (
            <section className='charges-section section'>
            <AddButton onClick={() => setFormActive(true)}>Add more charges</AddButton>
            <Table charges={charges}/>
            <AddForm active={formActive} setActive={setFormActive}/>
        </section>
    )
}

export default Charges;