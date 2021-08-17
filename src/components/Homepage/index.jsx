import charges from '../data';

import Table from './Table.jsx';
import AddForm from '../AddForm';

function HomePage(){
    localStorage.setItem('charges', JSON.stringify(charges));

    return (
        <section className='homepage'>
            <h1>Charges</h1>
            <Table charges={charges}/>
            <AddForm/>
        </section>
    );
}

export default HomePage;