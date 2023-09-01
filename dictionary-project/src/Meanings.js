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
          <div className="definition"> {props.meanings.definition}</div>
          <Example example={props.meanings.example} />
          <br />
          <Synonyms synonyms={props.meanings.synonyms} />
        </div>
      </p>
    </div>
  );
}
