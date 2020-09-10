import React, { Component } from "react";
import ReactDOM from "react-dom";
import Box2 from "./Box2";
import Box4 from "./Box4";
export default class box1 extends Component {
  render() {
    return (
      <div style={{ border: "20px solid green" }}>
        <Box2 />
      </div>
    );
  }
}
