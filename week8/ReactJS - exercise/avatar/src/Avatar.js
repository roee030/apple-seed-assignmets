import React from "react";

export default function Avatar(props) {
  return (
    <div className="avatarCard">
      <img src={props.imgSrc}></img>
      <div className="avatarFullName">
        {props.firstName} &nbsp;
        {props.lastName}
      </div>
    </div>
  );
}
