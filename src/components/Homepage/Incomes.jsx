import charges from '../data';
import Table from './Table';
import {AddButton, SectionTitle} from '../styles';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import AddChargePage from '../AddChargePage';

function Incomes() {
    return (
        <Router basename='/incomes'>
        <section className='incomes-section section'>

            <SectionTitle>Incomes</SectionTitle>
            <AddButton to='/add'>Add more incomes</AddButton>
            <Table charges={charges}/>

            <Switch>
                <Route path='/add' component={AddChargePage}/>
            </Switch>
            
        </section>
        </Router>
    )
}

export default Incomes;