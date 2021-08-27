import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
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
                <Redirect to='/charges'/>

             <TabNav>
                <TabLink exact to='/charges' activeClassName='tab--active'>Charges Categories</TabLink>
                <TabLink to='/incomes' activeClassName='tab--active'>Incomes Categories</TabLink>
            </TabNav>

            <Switch>
                <Route path='/charges' component={ChargesCategories}/>
                <Route path='/incomes' component={IncomesCategories}/>
            </Switch>
        </Router>
        </section>
        </div>
    );
};

export default Categories;