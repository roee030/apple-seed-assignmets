import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Products";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Home}></Route>
          <Route path="/products" component={Products}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
