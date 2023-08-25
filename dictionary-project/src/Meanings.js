import React from "react";

export default function Meanings(props) {
  console.log(props.meanings);
  return (
    <div>
      <h3>{props.meanings.partOfSpeech}</h3>
      <p>{props.meanings.definition}</p>
      <p>
        <em>{props.meanings.example}</em>
      </p>
      <p>
        <b>{props.meanings.synonyms}</b>
      </p>
    </div>
  );
}
