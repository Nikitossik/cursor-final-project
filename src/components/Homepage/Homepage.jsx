import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import BalanceHeader from '../BalanceHeader';

import Charges from './Charges';
import Incomes from './Incomes';

import {TabNav, TabLink} from '../styles';

import {useState, useEffect} from 'react';

function HomePage(){

    const [balance, setBalance] = useState(0);

    const getBalanceFromLocalStorage = () => {
        const reduxState = JSON.parse(localStorage.getItem('reduxState'));
        const localBalance = reduxState ? reduxState.balance : 0;
        setBalance(localBalance);
    }

    useEffect(() => {
        getBalanceFromLocalStorage();
    }, []);

    return (
        <section className='homepage page'>
            <BalanceHeader balance={balance}/>
            <Router basename='/home'>

             <TabNav>
                <TabLink to='/charges' activeClassName='tab--active'>Charges</TabLink>
                <TabLink to='/incomes' activeClassName='tab--active'>Incomes</TabLink>
            </TabNav>

            <Switch>
                <Route path='/charges'>
                    <Charges getBalance={getBalanceFromLocalStorage}/>
                </Route>
                <Route path='/incomes'>
                    <Incomes getBalance={getBalanceFromLocalStorage}/>
                </Route>
            </Switch>
        </Router>
        </section>
    );
}

export default HomePage;