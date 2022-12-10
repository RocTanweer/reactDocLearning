import React from "react";
import Place from "./Place.jsx";
import { places } from "../data/data";

function List() {
  const listItems = places.map((place) => (
    <li key={place.id}>
      <Place place={place} />
    </li>
  ));
  return <ul>{listItems}</ul>;
}

export default List;
