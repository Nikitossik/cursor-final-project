import charges from '../data';
import Table from './Table';
import {AddButton, SectionTitle} from '../styles';

function Charges() {
    return (
        <section className='charges-section section'>

            <SectionTitle>Charges</SectionTitle>
            <AddButton to=''>Add more charges</AddButton>
            <Table charges={charges}/>
            
        </section>
    )
}

export default Charges;