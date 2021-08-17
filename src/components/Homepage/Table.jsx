import Row from './Row'

function Table(){
    const charges = JSON.parse(localStorage.getItem('charges')) || [];

    return (
        <div className='charges-list'>
            {
                charges.map(charge => <Row key={charge.index} {...charge} />)
            }
        </div>
    );
}

export default Table;