import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import BalanceHeader from '../BalanceHeader';

import Charges from './Charges';
import Incomes from './Incomes';

import {TabNav, TabLink} from '../styles';

function HomePage(){
    return (
        <section className='homepage page'>
            <BalanceHeader/>
            <Router basename='/home'>

             <TabNav>
                <TabLink to='/charges' activeClassName='tab--active'>Charges</TabLink>
                <TabLink to='/incomes' activeClassName='tab--active'>Incomes</TabLink>
            </TabNav>

            <Switch>
                <Route path='/charges' component={Charges}/>
                <Route path='/incomes' component={Incomes}/>
            </Switch>
        </Router>
        </section>
    );
}

export default HomePage;