import { createGlobalStyle } from 'styled-components';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import NavBar from './components/Nav';

import HomePage from "./components/Homepage";
import AddChargePage from './components/AddChargePage';
import Charts from './components/Charts/Charts.jsx';

import './App.css';

const Global = createGlobalStyle`
  *, *::before, *::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body{
    font-family: sans-serif;
    background: #F9F2DF;
  }
`;

function App() {
  return (
    <div className='wrapper'>

      <Global />

      <Router>

        <NavBar />
        <Switch>
          <Route exact path='/'>
            <Redirect to='/home/charges' />
          </Route>
          <Route path="/home" component={HomePage} />
          <Route path="/charts" component={Charts} />
          <Route path='/add' component={AddChargePage} />
        </Switch>

      </Router>

    </div >
  );
}

export default App;
