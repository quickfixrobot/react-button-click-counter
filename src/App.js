import logo from './logo.svg';
import './App.css';
import ButtonCounter from './components/ButtonCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React JS Beginner Project
        </a>
        Click the button to increment counter
        <ButtonCounter/>
      </header>
    </div>
  );
}

export default App;
