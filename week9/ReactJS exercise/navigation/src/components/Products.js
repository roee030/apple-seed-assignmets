import React, { Component } from "react";
import data from "../data/store";
import { Link } from "react-router-dom";
export default class Products extends Component {
  state = {
    data: [],
  };
  componentDidMount = () => {
    this.setState({ data });
  };
  render() {
    const product_title = this.state.data.map((element) => {
      return (
        <Link key={element.id} to={`/products/${element.id}`}>
          {element.title}
        </Link>
      );
    });
    return <div>{product_title}</div>;
  }
}
