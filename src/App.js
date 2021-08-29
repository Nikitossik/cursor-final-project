import { createGlobalStyle } from "styled-components";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import NavBar from "./components/Nav";
import HomePage from "./components/Homepage/Homepage";
import Charts from "./components/Charts/Charts.jsx";
import Categories from "./components/Categories/Categories";

import { useState, useEffect } from 'react';

import "./App.css";

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
    <div className="wrapper">
      <Global />

      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home/charges" />
          </Route>
          <Route path="/home">
            <HomePage getBalance={getBalanceFromLocalStorage} balance={balance} />
          </Route>
          <Route path="/categories">
            <Categories balance={balance} />
          </Route>
          <Route path="/charts">
            <Charts balance={balance} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
