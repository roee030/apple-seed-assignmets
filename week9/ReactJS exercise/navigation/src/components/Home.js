import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
export default class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/products">click here to go to product page</Link>
      </div>
    );
  }
}
