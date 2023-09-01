import React from "react";
import "./Meanings.css";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  console.log(props.meanings);

  return (
    <div className="text">
      <h3>{props.meanings.partOfSpeech}</h3>
      <p className="text">
        <strong>Definition: </strong> {props.meanings.definition}
        <br />
        <em>{props.meanings.example}</em>
        <br />
        <strong>Synonyms:</strong>{" "}
        <Synonyms synonyms={props.meanings.synonyms} />
      </p>
    </div>
  );
}
