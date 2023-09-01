import React from "react";
import "./Meanings.css";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meanings(props) {
  console.log(props.meanings);

  return (
    <div className="text">
      <h3>{props.meanings.partOfSpeech}</h3>
      <p className="text">
        <strong>Definition: </strong> {props.meanings.definition}
        <br />
        <strong>Synonyms:</strong>{" "}
        <Synonyms synonyms={props.meanings.synonyms} />
        <Example example={props.meanings.example} />
      </p>
    </div>
  );
}
