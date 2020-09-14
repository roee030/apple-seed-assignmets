import React, { Component } from "react";

export default class Box extends Component() {
  render() {
    return (
      <div
        className="box-animation"
        style={{ width: this.props.width, height: this.props.height }}
      ></div>
    );
  }
}
