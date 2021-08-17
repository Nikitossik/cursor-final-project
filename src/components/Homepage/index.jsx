import charges from '../data';

import Table from './Table.jsx';

function HomePage(){
    localStorage.setItem('charges', JSON.stringify(charges));

    return (
        <section className='homepage'>
            <h1>Charges</h1>
            <Table/>
        </section>
    );
}

export default HomePage;