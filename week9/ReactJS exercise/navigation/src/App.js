import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      PageOne
      <Link to="/pagetwo">Link</Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      PageTwo
      <Link to="/">Link</Link>
    </div>
  );
};
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={PageOne}></Route>
        <Route path="/pagetwo" component={PageTwo}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
