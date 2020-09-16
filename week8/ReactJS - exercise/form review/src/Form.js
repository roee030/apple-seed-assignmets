import React, { Component } from "react";
import Popup from "./Popup";
export default class Form extends Component {
  state = {
    firstname: "",
    lastname: "",
    car: "",
    freetext: "",
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    document.querySelector(".popup").style.visibility = "visible";
    document.querySelector(".myForm").style.visibility = "hidden";
  };
  backToForm = () => {
    document.querySelector(".popup").style.visibility = "hidden";
    document.querySelector(".myForm").style.visibility = "visible";
  };
  render() {
    console.log(this.state);
    return (
      <>
        <form className="myForm" onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input type="text" name="firstname" onChange={this.handleChange} />
          </label>
          <label>
            Last Name:
            <input type="text" name="lastname" onChange={this.handleChange} />
          </label>
          <label>
            What is your car
            <select
              name="cars"
              id="cars"
              name="car"
              onChange={this.handleChange}
            >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </label>
          <label>
            Free text
            <textarea
              id="mytextarea"
              name="freetext"
              name="freetext"
              rows="4"
              cols="50"
              onChange={this.handleChange}
            ></textarea>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div className="popup">
          firstname: {this.state.firstname}
          <br></br>
          lastname: {this.state.lastname}
          <br></br>
          car: {this.state.car}
          <br></br>
          freetext: {this.state.freetext}
          <br></br>
          <button onClick={this.backToForm}>back</button>
        </div>
      </>
    );
  }
}
