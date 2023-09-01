import React from "react";
import "./Example.css";

export default function Example(props) {
  if (props.example) {
    return (
      <div className="text">
        {" "}
        <em>{props.example}</em>
      </div>
    );
  } else {
    return null;
  }
}
