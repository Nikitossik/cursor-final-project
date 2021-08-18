import charges from '../data';
import Table from './Table';
import {AddButton, SectionTitle} from '../styles';

function Incomes() {
    return (
        <section className='incomes-section section'>

            <SectionTitle>Incomes</SectionTitle>
            <AddButton to=''>Add more incomes</AddButton>
            <Table charges={charges}/>
            
        </section>
    )
}

export default Incomes;