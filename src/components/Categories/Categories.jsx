import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BalanceHeader from '../BalanceHeader';
import ChargesCategories from './ChargesCategories';
import IncomesCategories from './IncomesCategories';
import {TabNav, TabLink} from '../styles';

const Categories = () => {

    return (
        <div>
            <section>
                <BalanceHeader />
                <Router basename='/categories'>

             <TabNav>
                <TabLink exact to='/chargescategories' activeClassName='tab--active'>Charges Categories</TabLink>
                <TabLink to='/incomescategories' activeClassName='tab--active'>Incomes Categories</TabLink>
            </TabNav>

            <Switch>
                <Route path='/chargescategories' component={ChargesCategories}/>
                <Route path='/incomescategories' component={IncomesCategories}/>
            </Switch>
        </Router>
        </section>
        </div>
    );
};

export default Categories;