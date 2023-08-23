import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="img-fluid App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer text-center">
          <small>
            Coded by{" "}
            <a href="https://github.com/haleytoye/dictionary-project">
              Haley Toye
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
