import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <form>
        <label>
          First Name:
          <input type="text" />
        </label>
        <label>
          Last Name:
          <input type="text" />
        </label>
        <label>
          What is your car
          <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </label>
        <label>
          Free text
          <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
