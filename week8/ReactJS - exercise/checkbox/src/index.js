import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Checkbox from "./App";
ReactDOM.render(
  <div>
    <Checkbox initial_value={false} text="I read the term of the app" />
    <Checkbox initial_value={false} text="I accept the term of the app" />
    <Checkbox
      initial_value={true}
      text="I want to get the weekly news letter"
    />
    <Checkbox initial_value={true} text="I want to get sales and offers" />
  </div>,

  document.querySelector("#root")
);
