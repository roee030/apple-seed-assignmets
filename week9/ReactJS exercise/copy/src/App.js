import React, { Component } from "react";

export default class App extends Component {
  textRef = React.createRef();
  state = {};
  componentDidMount() {
    this.textRef.current.focus();
  }
  clickHandle = (e) => {
    e.preventDefault();
    console.log(this.textRef.current.value);
    this.textRef.current.select();
    document.execCommand("copy");
  };
  render() {
    return (
      <form>
        <textarea ref={this.textRef}></textarea>
        <button onClick={this.clickHandle}>Copy me</button>
      </form>
    );
  }
}
