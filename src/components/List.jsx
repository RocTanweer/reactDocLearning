import React from "react";
import Place from "./Place.jsx";
import { places } from "../data/data";

function List({ imageSize }) {
  const listItems = places.map((place) => (
    <li key={place.id}>
      <Place place={place} imageSize={imageSize} />
    </li>
  ));
  return <ul>{listItems}</ul>;
}

export default List;
