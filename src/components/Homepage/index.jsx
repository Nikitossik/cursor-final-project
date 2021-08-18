import charges from '../data';

import Table from './Table.jsx';
import AddForm from '../AddForm';
import Header from './Header';

function HomePage(){
    localStorage.setItem('charges', JSON.stringify(charges));

    return (
        <section className='homepage'>
            <Header/>
            <h1>Charges</h1>
            <Table charges={charges}/>
            <AddForm/>
        </section>
    );
}

export default HomePage;