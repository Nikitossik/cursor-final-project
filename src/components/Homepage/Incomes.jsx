import React, { useState} from "react";
import Table from './Table';
import { AddButton } from '../styles';
import AddForm from '../AddForm';
import { useSelector } from 'react-redux';
import { selectIncomes } from '../../redux/incomesSlice';


function Incomes() {
    const [formActive, setFormActive] = useState(false);

    const incomes = useSelector(selectIncomes);

    return (
        <section className='charges-section section'>
            <AddButton onClick={() => setFormActive(true)}>Add more incomes</AddButton>
            <Table rows={incomes}/>
            <AddForm active={formActive} setActive={setFormActive} title={"income"}/>
        </section>
    )
}

export default Incomes;