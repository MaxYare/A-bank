import React from "react";
import Card from "./Card";
import UseCases from "../UseCasesFunny";

function createCard(props) {
  return (
    <Card
      key={props.id}
      video={props.video}
      name={props.name}
      description={props.meaning}
      ID={props.id}
      link={props.link}
    />
  );
}

function UseCasesField() {
  return (
    <div>
      <dl className="dictionary">{UseCases.map(createCard)}</dl>
    </div>
  );
}
export default UseCasesField;
