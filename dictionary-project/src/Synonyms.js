import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="m-0 p-0">
        {props.synonyms.map(function (synonyms, index) {
          return (
            <li className="d-inline p-3" key={index}>
              {synonyms}
            </li>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}
