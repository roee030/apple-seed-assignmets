import React from "react";
import "./App.css";
import Button from "./Button";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button className={"bold"} text={"important"}></Button>
        <Button text={"not important"}></Button>
      </header>
    </div>
  );
}

export default App;
