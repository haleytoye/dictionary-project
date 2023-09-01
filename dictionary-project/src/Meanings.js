import React from "react";
import "./Meanings.css";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meanings(props) {
  console.log(props.meanings);

  return (
    <div className="meanings">
      <p>
        <em>
          <strong>{props.meanings.partOfSpeech}</strong>
        </em>

        <div className="text">
          <strong>Definition: </strong> {props.meanings.definition}
          <br />
          <strong>Synonyms:</strong>{" "}
          <Synonyms synonyms={props.meanings.synonyms} />
          <Example example={props.meanings.example} />
        </div>
      </p>
    </div>
  );
}
