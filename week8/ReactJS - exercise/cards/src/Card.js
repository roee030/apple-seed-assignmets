import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.src} alt={props.title}></img>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <div className="card-btn">
        <button>Share</button>
        <button>Explore</button>
      </div>
    </div>
  );
}
