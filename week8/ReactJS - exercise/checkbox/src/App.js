import React, { Component } from "react";
import "./App.css";
export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheckedByDefault: this.props.initial_value,
    };
  }

  onChange = (event) => {
    this.setState({ isCheckedByDefault: event.target.checked });
  };

  render() {
    return (
      <div>
        <input
          type="checkbox"
          onChange={this.onChange}
          checked={this.state.isCheckedByDefault}
        />
        <label>{this.props.text}</label>
      </div>
    );
  }
}
