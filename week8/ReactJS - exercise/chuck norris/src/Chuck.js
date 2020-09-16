import Axios from "axios";
import React, { Component } from "react";
import axios from "axios";

export default class Chuck extends Component {
  async getJoke(category) {
    const data = await axios(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
    this.displayJoke(data.data.value);
  }
  displayJoke(joke) {
    const jokeElement = document.createElement("h2");
    jokeElement.textContent = joke;
    document.querySelector(".joke").innerHTML = `<h2>
        ${joke}
    </h2>`;
  }
  displayCategory(category) {
    category.forEach((element) => {
      const category_btn = document.createElement("button");
      category_btn.textContent = element;
      category_btn.addEventListener("click", () => this.getJoke(element));
      document
        .querySelector(".category")
        .insertAdjacentElement("afterbegin", category_btn);
    });
  }
  async componentDidMount() {
    const category = await axios.get(
      ` https://api.chucknorris.io/jokes/categories`
    );
    this.displayCategory(category.data);
  }
  render() {
    return (
      <div className="jokes">
        <div className="joke"></div>
        <div className="category"></div>
      </div>
    );
  }
}
