import React, { Component } from "react";
import Search from "./Search";
import "./App.css";
import axios from "axios";
export default class App extends Component {
  getAvatar = async () => {
    const avatar = await axios.get(`https://tinyfac.es/api/users`);
    console.log(avatar);
  };
  render() {
    return (
      <div>
        <Search />
      </div>
    );
  }
}
