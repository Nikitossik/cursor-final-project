import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import BalanceHeader from '../BalanceHeader';
import ChargesCategories from './ChargesCategories';
import IncomesCategories from './IncomesCategories';
import {TabNav, TabLink} from '../styles';

const Categories = ({balance}) => {

    return (
            <section className='categories-page page'>
                <BalanceHeader balance={balance}/>
                <Router basename='/categories'>
                <Redirect to='/charges'/>

             <TabNav>
                <TabLink to='/charges' activeClassName='tab--active'>Charges Categories</TabLink>
                <TabLink to='/incomes' activeClassName='tab--active'>Incomes Categories</TabLink>
            </TabNav>

            <Switch>
                <Route path='/charges' component={ChargesCategories}/>
                <Route path='/incomes' component={IncomesCategories}/>
            </Switch>
        </Router>
        </section>
    );
};

export default Categories;