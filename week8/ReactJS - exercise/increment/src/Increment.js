import React, { Component } from "react";

export default class Increment extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    function increase() {
      console.log("dddd");
    }
  }
  render() {
    return (
      <div>
        <button>click me</button>
        <span>{this.state.number}</span>
      </div>
    );
  }
}
