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
  return (
    <div className="wrapper">
      <Global />

      <Router>
        <NavBar />
        <Switch>
          <Route exact="true" path="/">
            <Redirect to="/home/charges" />
          </Route>
          <Route path="/home" component={HomePage} />
          <Route path="/categories" component={Categories} />
          <Route path="/charts" component={Charts} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
