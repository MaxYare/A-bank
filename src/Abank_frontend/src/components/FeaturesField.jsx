import React from "react";
import Card from "./Card";
import Features from "../FeaturesFunny";
import { Link } from "react-router-dom";

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

function CardsField() {
  return (
    <div>
      <dl className="dictionary">{Features.map(createCard)}</dl>
    </div>
  );
}
export default CardsField;
