import charges from '../data';
import Table from './Table';
import {AddButton, SectionTitle} from '../styles';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import AddChargePage from '../AddChargePage';

function Charges() {
    return (
        <Router basename='/charges'>
        <section className='charges-section section'>

            <SectionTitle>Charges</SectionTitle>
            <AddButton to='/add'>Add more charges</AddButton>
            <Table charges={charges}/>

            <Switch>
                <Route path='/add' component={AddChargePage}/>
            </Switch>
            
        </section>
        </Router>
    )
}

export default Charges;