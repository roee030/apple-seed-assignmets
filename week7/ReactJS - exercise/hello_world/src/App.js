import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const data = ["hello", "world"];
  const number1 = 5;
  const number2 = 6;
  const string = `I love React!`;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {data[0]} {data[1]}
        </p>
        <p>{number1 + number2}</p>
        <p>{string}</p>
        <p>The string’s length is {string.length}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Me
        </a>
      </header>
    </div>
  );
}

export default App;
