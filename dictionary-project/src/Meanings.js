import React from "react";
import "./Meanings.css";

export default function Meanings(props) {
  console.log(props.meanings);
  return (
    <div className="text">
      <h3 className="text">{props.meanings.partOfSpeech}</h3>
      <p className="text">{props.meanings.definition}</p>
      <p className="text">
        <em>{props.meanings.example}</em>
      </p>
      <p className="text">
        <b>{props.meanings.synonyms}</b>
      </p>
    </div>
  );
}
