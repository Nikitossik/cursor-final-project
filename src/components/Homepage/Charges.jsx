import React, { useState} from "react";
import Table from './Table';
import { AddButton } from '../styles';
import AddForm from '../AddForm';
import { useSelector } from 'react-redux';
import { selectCharges } from '../../redux/chargesSlice';

function Charges() {
    const [formActive, setFormActive] = useState(false);

    const charges = useSelector(selectCharges);

    return (
            <section className='charges-section section'>
                <AddButton onClick={() => setFormActive(true)}>Add more charges</AddButton>
                <Table rows={charges}/>
                <AddForm active={formActive} setActive={setFormActive} title={"charge"}/>
            </section>
    )
}

export default Charges;