import HomePage from "./components/Homepage";
import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  *, *::before, *::after{
    box-sizing: border-box;
  }

  body{
    margin: 0;
    padding: 0;
    font-family: sans-serif
  }
`

function App() {
  return (
    <div className="App">
      <Global />
      <HomePage />
    </div>
  );
}

export default App;
