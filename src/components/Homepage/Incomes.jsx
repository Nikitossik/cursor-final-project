import React, { useState} from "react";
import charges from '../data';
import Table from './Table';
import { AddButton} from '../styles';
import AddForm from '../AddForm'


function Incomes() {
    const [formActive, setFormActive] = useState(false);
    return (
            <section className='charges-section section'>
            <AddButton onClick={() => setFormActive(true)}>Add more incomes</AddButton>
            <Table charges={charges}/>
            <AddForm active={formActive} setActive={setFormActive} title={"income"}/>
        </section>
    )
}

export default Incomes;