import React, { Component } from "react";

export default class Q1Input extends Component {
  render() {
    return (
      <div>
        <input
          type="range"
          min="1"
          max="100"
          value="50"
          class="slider"
          id="myRange"
        ></input>
      </div>
    );
  }
}
