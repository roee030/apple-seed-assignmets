import React, { Component } from "react";

export default class HideAndSeek extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
      toggle: () => {
        if (!this.state.value) {
          console.log("hidden");
          document.querySelector(".imgToggle").style.display = "none";
          this.state.value = !this.state.value;
        } else {
          console.log("visible");
          document.querySelector(".imgToggle").style.display = "block";
          this.state.value = !this.state.value;
        }
      },
    };
  }
  render() {
    return (
      <div>
        <button onClick={this.state.toggle}>Show/Hide</button>
        <img
          className="imgToggle"
          src="https://www.ubidreams.fr/wp-content/uploads/2020/06/logo-react-js.png"
        ></img>
      </div>
    );
  }
}
