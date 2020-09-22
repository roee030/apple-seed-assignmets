import React, { Component } from "react";
export default class App extends Component {
  state = {
    userInput: "",
  };
  formRef = React.createRef();
  componentDidMount() {
    this.formRef.current.focus();
    console.log(this.formRef);
  }
  handleForm = (e) => {
    e.preventDefault();
    console.log(this.formRef.current.value);
    this.setState({ userInput: this.formRef.current.value });
  };
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." ref={this.formRef}></input>
        <button onClick={this.handleForm}>Click me</button>
      </form>
    );
  }
}
