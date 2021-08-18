import React from 'react';
import BalanceHeader from '../BalanceHeader';
import AddForm from '../AddForm';

function AddChargePage(){
    return (
        <section className='add-charge page'>
            <BalanceHeader/>
            <h1>Add new charge</h1>
            <AddForm/>
        </section>
    );
}

export default AddChargePage;