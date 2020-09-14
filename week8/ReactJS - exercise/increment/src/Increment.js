import React, { Component } from "react";

export default class Increment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      increase: () => {
        this.setState({ value: this.state.value + 1 });
      },
    };
  }
  render() {
    return (
      <div>
        <button onClick={this.state.increase}>click me</button>
        <span>{this.state.value}</span>
      </div>
    );
  }
}
