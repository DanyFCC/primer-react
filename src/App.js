import logo from "./DC.jpg";
import "./App.css";
import TitleComponent from "./components/TitleComponent";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TitleComponent></TitleComponent>
        <p>
          Modificado <code>src/App.js</code> y cambiado por DC para ADA
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
