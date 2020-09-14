import React from "react";
import "./App.css";
import BoxAnimation from "./Box";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BoxAnimation width="30px" height="20px"></BoxAnimation>
        <BoxAnimation width="50px" height="20px"></BoxAnimation>
        <BoxAnimation width="100px" height="300px"></BoxAnimation>
      </header>
    </div>
  );
}

export default App;
