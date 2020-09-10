import React, { Component } from "react";
import Title from "./QuizTitle";
import Q1 from "./Q1";
import Q2 from "./Q2";
export default class Quiz extends Component {
  render() {
    return (
      <div
        style={{
          border: "1px solid black",
          display: "inline-block",
          padding: "20px",
        }}
      >
        <Title></Title>
        <Q1></Q1>
        <Q2></Q2>
      </div>
    );
  }
}
