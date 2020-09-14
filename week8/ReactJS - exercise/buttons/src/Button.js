import React from "react";

export default function Button(props) {
  console.log(props);
  return (
    <div>
      <button className={props.className}>{props.text} </button>
    </div>
  );
}
