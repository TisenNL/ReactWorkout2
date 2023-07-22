import React from "react";
import Concept from "./ConceptItem";

const Concepts = ({ concepts }) => {
  return (
    <ul id="concepts">
      <Concept concept={concepts[0]} />
      <Concept concept={concepts[1]} />
      <Concept concept={concepts[2]} />
    </ul>
  );
};

export default Concepts;
