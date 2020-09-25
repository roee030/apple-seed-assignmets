import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Products";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import Roee from "./components/Roee";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/roee" component={Roee} />
          <Route path="/" exact component={Home}></Route>
          <Route path="/products" exact component={Products}></Route>
          <Route path="/products/:id" component={ProductDetail}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
// Router vs BrowserRouter ??
